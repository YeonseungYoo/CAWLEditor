var express = require('express');
var router = express.Router();

// Import Async Node Module
var async = require('async');

// Import MySQL Database
var mysql = require('mysql');
var connection = null;

// Component Type
var componentType = null;

// Component Name
var componentName = null;

/* AJAX POST Process */
router.post('/', function(req, res, next) {
    var msg = req.body.msg;
    
    // Response Create Configuration Component Result
    if(msg == "deleteConfigurationComponent") {
        async.waterfall([
            function(callback) {
                componentType = req.body.type;
                
                componentName = req.body.name;
                
                callback(null);
            },
            connectMySQL,
            deleteElement,
            disconnectMySQL
        ], function(err) {
            res.send({result:true});
        });
    }
});

// CAWL Component Database Connection
function connectMySQL(callback) {
    connection = mysql.createConnection({
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'root',
        database:'component'
    });
    
    connection.connect();
    
    callback(null);
}

// Delete Element
function deleteElement(callback) {
    if(componentType == 'Message') {
        deleteMessageElement();
    } else if(componentType == 'Variable') {
        deleteVariableElement();
    } else if(componentType == 'Ontology') {
        deleteOntologyElement();
    } else if(componentType == 'Service Provider') {
        deleteServiceProviderElement();
    } else if(componentType == 'Node') {
        deleteNodeElement();
    }
    
    callback(null);
}

// CAWL Component Database Disconnection
function disconnectMySQL(callback) {
    connection.end();
    
    callback(null);
}

// Delete Message Element
function deleteMessageElement() {
    var query = "DELETE FROM element_message WHERE message_id = '" + componentName + "'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deletePartElement();
}

// Delete Part Element
function deletePartElement() {
    var query = "DELETE FROM element_part WHERE part_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
}

// Delete Variable Element
function deleteVariableElement() {
    var query = "DELETE FROM element_variable WHERE variable_id = '" + componentName + "'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deleteInitializeElement();
}

// Delete Initialize Element
function deleteInitializeElement() {
    var query = "DELETE FROM element_initialize WHERE initialize_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deleteFromElement();
}

// Delete From Element
function deleteFromElement() {
var query = "DELETE FROM element_from WHERE from_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
}

// Delete Ontology Element
function deleteOntologyElement() {
    var query = "DELETE FROM element_ontology WHERE ontology_id = '" + componentName + "'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
}

// Delete Service Provider Element
function deleteServiceProviderElement() {
    var query = "DELETE FROM element_serviceprovider WHERE serviceprovider_id = '" + componentName + "'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deleteServiceElement();
}

// Delete Service Element
function deleteServiceElement() {
    var query = "DELETE FROM element_service WHERE service_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
}

// Delete Node Element
function deleteNodeElement() {
    var query = "DELETE FROM element_node WHERE node_id = '" + componentName + "'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deleteReuseMessageElement();
    deleteReuseVariableElement();
    deleteWaitElement();
    deleteConditionElement();
    deleteInvokeElement();
}

// Delete Reuse Message Element
function deleteReuseMessageElement() {
    var query = "DELETE FROM element_message WHERE message_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deletePartElement();
}

// Delete Reuse Variable Element
function deleteReuseVariableElement() {
    var query = "DELETE FROM element_variable WHERE variable_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deleteInitializeElement();
}

// Delete Wait Element
function deleteWaitElement() {
    var query = "DELETE FROM element_wait WHERE wait_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
}

// Delete Condition Element
function deleteConditionElement() {
    var query = "DELETE FROM element_condition WHERE condition_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deleteCaseElement();
    deleteContextElement();
}

// Delete Case Element
function deleteCaseElement() {
    var query = "DELETE FROM element_case WHERE case_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deleteEventElement();
}

// Delete Event Element
function deleteEventElement() {
    var query = "DELETE FROM element_event WHERE event_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
}

// Delete Context Element
function deleteContextElement() {
    var query = "DELETE FROM element_context WHERE context_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deleteRuleElement();
}

// Delete Rule Element
function deleteRuleElement() {
    var query = "DELETE FROM element_rule WHERE rule_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deleteConstraintElement();
}

// Delete Constraint Element
function deleteConstraintElement() {
    var query = "DELETE FROM element_constraint WHERE constraint_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
    
    deleteSubjectElement();
    deleteVerbElement();
    deleteObjectElement();
}

// Delete Subject Element
function deleteSubjectElement() {
    var query = "DELETE FROM element_subject WHERE subject_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
}

// Delete Verb Element
function deleteVerbElement() {
    var query = "DELETE FROM element_verb WHERE verb_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
}

// Delete Object Element
function deleteObjectElement() {
    var query = "DELETE FROM element_object WHERE object_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
}

// Delete Invoke Element
function deleteInvokeElement() {
    var query = "DELETE FROM element_invoke WHERE invoke_id LIKE '" + componentName + "%'";
    
    connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
    });
}

module.exports = router;
