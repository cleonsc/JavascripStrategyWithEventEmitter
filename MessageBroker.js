const EventEmitter = require('events').EventEmitter;
const strategies = require('./strategy/');
class MessageBroker extends EventEmitter{
    constructor(){
        super();        
    }

    suscribeStrategies(){
        for (let strategy of Object.keys(strategies)) {
            this.on(strategy,()=>{
                strategies[strategy]();
            });
        }
    }

    publishMessage(strategyName){
        this.emit(strategyName);
    }
}

let messenger = new MessageBroker();
messenger.suscribeStrategies();
messenger.publishMessage('strategyA');
messenger.publishMessage('strategyB');