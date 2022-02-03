const dbSQLUtil = {
    viewDepartments: async() => {
        const departments = await dbQueryUtil.viewDepartments();
        console.table(departments);
        app();
    },
};