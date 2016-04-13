export function transformation_form() {
    return [
        {
            "type": "fieldset",
            "title": "Actions on destination",
            "items": [
                {
                    "title": "Insert",
                    "key": "insert",
                    "description": "Insert items in source, but not in destination",
                    "type": "checkbox",
                    "notitle": false
                },
                {
                    "title": "Delete",
                    "key": "delete",
                    "description": "Delete items in destination, but not in source",
                    "type": "checkbox"
                },
                {
                    "title": "Update",
                    "key": "update",
                    "description": "Update if item in source, but not in destination",
                    "type": "checkbox"
                }
            ]
        },
        {
            "title": "SQL to run after merge",
            "description": "If the destination is a RDBMS, this SQL statement will be run after the merge is done.",
            "key": "post_execute_sql",
            "type": "textarea"
        },
        {
            "type": "fieldset",
            "title": "Resources",
            "description": "The resources involved, in a merge, one must be \"source\" and another \" destination\"",
            "items": [
                {
                    "key": "resources",
                    "notitle": true,
                    "type": "array",
                    "items": [
                        "base_path",
                        {
                            "key": "resources[].caption",
                            "title": "Friendly name",
                            "description": "A resource can be called anything, but in a merge, either \"source\" or \" destination\" "
                        },
                        {
                            "key": "resources[].type",
                            "title": "Resource type",
                            // Exclude the "datatypes" type, TODO: What does this mean?
                            "titleMap": getResourcetypes(),

                            "type": "select",
                            "description": "An approximation of the datatypes of the sources"
                        },
                        {
                            "key": "resources[].uuid",
                            "title": "UUID"
                        }
                    ]
                }
            ]
        },
        {
            "type": "fieldset",
            "title": "Field mappings",
            "items": [
                {
                    "key": "mappings",
                    "notitle": true,
                    "type": "array",
                    "items": [
                        {
                            "key": "mappings[].dest_reference",
                            "title": "Destination reference",
                            "description": "The name of the destination field"
                            // TODO: Add lookups to all feld mappings later on.
                        },
                        {
                            "key": "mappings[].is_key",
                            "title": "Destination is a key field",
                            "description": "If the destination field is a key field, it is used to match source and destination items"
                        },
                        {
                            "key": "mappings[].src_datatype",
                            "title": "The datatype of the source",
                            // Exclude the "datatypes" type, TOOD: What does this mean?
                            "titleMap": getDatatypes(),
                            "type": "select",
                            "description": "An approximation of the datatype of the source field"
                        },
                        {
                            "key": "mappings[].substitution",
                            "title": "Substitution"
                        }
                    ]
                }
            ]
        },

        {
            "type": "submit",
            "style": "btn-info",
            "title": "OK"
        }
    ];
}


export function getDatatypes() {
    return [
        {value: "integer", name: "integer - any integer, +/- within platform limit"},
        {value: "string", name: "String - any length"},
        {value: "string(255)", name: "String, fixed length of 255 characters"},
        {value: "string(3000)", name: "String, fixed length of 3000 characters (max for db2 with some leeway)"},
        {value: "float", name: "Float - any floating number"},
        {value: "serial", name: "Serial - an incrementing integer in postgresSQL, cmp. identity"},
        {value: "timestamp", name: "Timestamp - any ISO 8601 compatible value"},
        {value: "boolean", name: "Boolean - can be either True or False"},
        {value: "blob", name: "BLOB - Binary Large OBject, usually a file."}
    ];
}
export function getResourcetypes() {
    return [
        {value: "FLATFILE", name: "A flat text file, fixed width or comma-separated"},
        {value: "XPATH", name: "XPath - XML, XHTML, JSON, any tree that can be managed via XPath"},
        {
            value: "RDBMS",
            name: "Relational database - Supported are MySQL, PostgreSQL, Oracle, DB2, SQL Server and SQLite"
        },
        {value: "SPREADSHEET", name: "Spreadsheet - A spreadsheet file (Excel, Open office, Numbers etc)"},
        {value: "MATRIX", name: "Matrix - An in-memory 2-d matrix"}
    ];
}

