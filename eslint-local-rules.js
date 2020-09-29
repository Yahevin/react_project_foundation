module.exports = {
    "no-bad-await": {
        create: context => {
            const allowedAncestors = [
                "ReturnStatement",
                "VariableDeclarator",
                "ExpressionStatement",
                "AssignmentExpression"
            ];

            return {
                AwaitExpression: node => {
                    const ancestors = context.getAncestors(node);
                    const last = ancestors[ancestors.length - 1];

                    if (!allowedAncestors.includes(last.type)) {
                        context.report({
                            node,
                            message: "Не используйте await в выражениях."
                        });
                    }
                }
            };
        }
    }
};