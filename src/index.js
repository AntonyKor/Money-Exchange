// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let answ = {};
    if (currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    else if (currency<1) return {};
    if (Math.floor(currency / 50)) {answ.H = Math.floor(currency / 50);
    currency -= answ.H*50;}
    if (Math.floor(currency / 25)) {answ.Q = Math.floor(currency / 25);
    currency -= answ.Q*25;}
    if (Math.floor(currency / 10)) {answ.D = Math.floor(currency / 10);
    currency -= answ.D*10;}
    if (Math.floor(currency / 5)) {answ.N = Math.floor(currency / 5);
    currency -= answ.N*5;}
    if (currency) answ.P = currency;
    return answ;
}
