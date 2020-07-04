export const state_empty = {
    projects: {
        isLoading: false,
        errMess: false,
        projects: []
    }, 
    phases: {
        isLoading: false,
        errMess: false,
        phases: []
    }, 
    log: {
        isLoading: false,
        errMess: false, 
        log: []
    }, 
    userinterface: {
        projectDetails: {
            open: false, 
            projectId: null
        }, 
        phaseUpdateModal: {
        open: false, 
        phaseId: null
        },
        projectUpdateModal: {
        open: false, 
        projectId: null
        }, 
        projectCreateModal: {
        open: false 
        }, 
        phaseCreateModal: {
        open: false 
        },
        deleteModal: {
        open: false
        }
    },
    user: {
        isLoading: false, 
        errMess: false,
        user: {
            authenticated: false, 
            username: null, 
            token: null, 
            loggedout: true, 
            accountcreated: false, 
            firstname: null
        }
        
    }
}

export const state_small = {
    projects: {
        isLoading: false,
        errMess: false,
        projects: [
            {
            26: {
                complete: false, 
                id: 26, 
                lastupdated: "2020-06-30T18:23:01.553000Z", 
                name: "Django REST API - Projectile", 
                owner: 71
            }
        }
    ]
    }, 
    phases: {
        isLoading: false,
        errMess: false,
        phases: [ {
            42: {
                active: true, 
                complete: false, 
                end: "2020-06-29", 
                id: 42, 
                lastupdated: "2020-06-30T20:22:57.072000Z", 
                name: "Engineering", 
                projectId: 26, 
                start: "2020-06-28"
                }
            }
        ]
    }, 
    log: {
        isLoading: false,
        errMess: false, 
        log: [
            { 52: {
                description: "Documentation  active updated to true", 
                id: 52, 
                notes: "No note entered", 
                projectId: 26, 
                timestamp: "2020-06-30T19:57:34.733000Z"
                }
            }
        ]
    }, 
    userinterface: {
        projectDetails: {
            open: true, 
            projectId: 26
        }, 
        phaseUpdateModal: {
        open: false, 
        phaseId: null
        },
        projectUpdateModal: {
        open: false, 
        projectId: null
        }, 
        projectCreateModal: {
        open: false 
        }, 
        phaseCreateModal: {
        open: false 
        },
        deleteModal: {
        open: false
        }
    },
    user: {
        isLoading: false, 
        errMess: false,
        user: {
            authenticated: false, 
            username: null, 
            token: null, 
            loggedout: true, 
            accountcreated: false, 
            firstname: null
        }
        
    }
}

export const state_nophases = {
    projects: {
        isLoading: false,
        errMess: false,
        projects: [ {
            26: {
                complete: false, 
                id: 26, 
                lastupdated: "2020-06-30T18:23:01.553000Z", 
                name: "Django REST API - Projectile", 
                owner: 71
                }
            }
        ]
    }, 
    phases: {
        isLoading: false,
        errMess: false,
        phases: []
    }, 
    log: {
        isLoading: false,
        errMess: false, 
        log: [
            { 52: {
                description: "Documentation  active updated to true", 
                id: 52, 
                notes: "No note entered", 
                projectId: 26, 
                timestamp: "2020-06-30T19:57:34.733000Z"
                }
            }
        ]
    }, 
    userinterface: {
        projectDetails: {
            open: true, 
            projectId: 26
        }, 
        phaseUpdateModal: {
        open: false, 
        phaseId: null
        },
        projectUpdateModal: {
        open: false, 
        projectId: null
        }, 
        projectCreateModal: {
        open: false 
        }, 
        phaseCreateModal: {
        open: false 
        },
        deleteModal: {
        open: false
        }
    },
    user: {
        isLoading: false, 
        errMess: false,
        user: {
            authenticated: false, 
            username: null, 
            token: null, 
            loggedout: true, 
            accountcreated: false, 
            firstname: null
        }
        
    }
}
