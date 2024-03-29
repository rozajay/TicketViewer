
export function enableErrorPage(errorMessage:string):any{
    return{
        type: 'ENABLE_ERROR_PAGE',
        payload: errorMessage
    }
}

export function updateTicketTable(content:any):any{
    return{
        type: 'UPDATE_TICKETS',
        content: content
    }
}

export function disableLoginPage():any{
    return{
        type: 'DISABLE_LOGIN_PAGE',
    }
}

export function enableTicketsTablePage():any{
    return{
        type: 'ENABLE_TICKETSTABLE_PAGE',
    }
}

export function enableSingleTicketPage(row:any):any{
    return{
        type: 'ENABLE_SINGLE_TICKET_PAGE',
        payload: row
    }
}

export function resetApplication():any{
    return{
        type: 'RESET_APPLICATION',
    }
}

export function updateSessionIdentity(email:string, password:string):any{
    return{
        type: 'UPDATE_SESSION_IDENTITY',
        email: email,
        password: password
    }
}