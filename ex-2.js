class Notification { 
    constructor(notificationId,createdTime,content,receiver)
    {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    };
    send()
    {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification{ 
    constructor(notificationId,createdTime,content,receiver)
        {
    super(notificationId,createdTime,content,receiver);
    };
    };

class SMSNotification extends Notification { 
    constructor(notificationId,createdTime,content,receiver)
    {super(notificationId,createdTime,content,receiver);
    }
};

let TarEmail = new EmailNotification("ABC",10.52,"Hi goodmorning","Emailreceiver@gmail.com");
 let TarSMS = new SMSNotification("EFG",11.50,"Hi good afternoon","08123456");
 TarEmail.send();
 TarSMS.send();
 

