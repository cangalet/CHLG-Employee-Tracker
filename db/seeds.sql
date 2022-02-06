INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Marketing'),
    ('Finance'),
    ('Operations'),
    ('Engineering');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Development Director', 100000, 1),
    ('Sales Development Rep', 55000, 1),
    ('Email Marketing Manager', 79000, 2),
    ('SEO Specialist', 55000, 2),
    ('Marketing Coordinator', 50000, 2),
    ('Senior Accountant', 71000, 3),
    ('Billing Specialist', 42000, 3),
    ('Director of Operations', 170000, 4),
    ('Jr Salesforce Admin', 80000, 4),
    ('Salesforce Admin', 125000, 4),
    ('Lead Engineer', 150000, 5),
    ('Software Engineer', 120000, 5);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Olivia', 'Smith', 2, 1),
    ('Liam', 'Johnson', 2, 1),
    ('Noah', 'Williams', 3, NULL),
    ('Emma', 'Brown', 4, 4),
    ('Ava', 'Garcia', 5, 4),
    ('Elijah', 'Miller', 6, Null),
    ('Charlotte', 'Davis', 7, 7),
    ('William', 'Martinez', 8, NULL),
    ('Sophia', 'Rodriguez', 9, 9),
    ('Benjamin', 'Anderson', 10, 9),
    ('Mia', 'Lopez', 11, NULL),
    ('Henry', 'Taylor', 12, 12),
    ('Evelyn', 'Moore', 12, 12);

