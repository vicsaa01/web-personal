export class MessageBroker {
    receivingAddress = 'victorsaakes@gmail.com'
    mailClient = 'http://localhost:8000'

    constructor() {}

    sendMessage(name: string, email: string, message: string): void {
        console.log('Name: ' + name)
        console.log('Email: ' + email)
        console.log('Message: ' + message)

        fetch(this.mailClient + '/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, email: email, message: message})
        })
        .then((res) => { return res.json() })
        .then((data) => {
            console.log('Email has been sent: ' + data)
        })
    }
}