var {declare} = require('@babel/helper-plugin-utils');
var {types: t} = require('@babel/core');
var pathMod = require('path');

module.exports = declare(api => {
    var styled = [];


    return {
        name: 'babel-plugin-styled-naming',
        visitor: {
            VariableDeclarator(path, state) {
                var isStyled = t.isTaggedTemplateExpression(path.node.init);
                if (!isStyled) return;

                var isMixin = path.node.init.tag.name === 'css';
                if (isMixin) return;

                setDisplayName(path.parentPath, path.node.id, path.node.id.name, dir.after);

                var filePath = getFilePath(state);
                var blockName = getBlockName(filePath);

                if (path.node.id.name !== blockName) {
                    styled.push({
                        name: path.node.id.name,
                        nodeId: path.node.id,
                        filePath: filePath
                    });
                }
            },
            JSXElement(path, state) {
                var index = styled.findIndex((item) => path.node.openingElement.name.name === item.name);
                if (index === -1) return;

                var currentStyled = styled.splice(index, 1)[0];

                var filePath = getFilePath(state);
                if (filePath !== currentStyled.filePath) return;

                var blockStatement = path.findParent(path => path.isBlockStatement());
                if (blockStatement === null) return;

                var blockName = getBlockName(filePath);
                var displayName = blockName + '.' + currentStyled.name;

                setDisplayName(blockStatement, currentStyled.nodeId, displayName, dir.before);
            }
        },
    };
});

var dir = {
    after: 'after',
    before: 'before'
};
function getFilePath(state) {
    return state.file.opts.filename;
}
function getBlockName(filePath) {
    var name = pathMod.basename(filePath, pathMod.extname(filePath));

    return name !== 'index' ? name : pathMod.basename(pathMod.dirname(filePath));
}

function setDisplayName(target, nameNodeId, displayName, direction) {
    var setDisplayNameStmn = t.expressionStatement(t.assignmentExpression(
        '=',
        t.memberExpression(nameNodeId, t.identifier('displayName')),
        t.stringLiteral(displayName)
    ));

    switch (direction) {
        case dir.after: {
            return target.insertAfter(setDisplayNameStmn);
        }
        case dir.before: {
            return target.insertBefore(setDisplayNameStmn);
        }
        default: {return}
    }
}