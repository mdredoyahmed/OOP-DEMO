class CurrencyConvater {
   static async fatchRate(){
       
        
        const response = await fetch( "https://v6.exchangerate-api.com/v6/0f4805f79b8f2aecf9d4415f/latest/USD") ;
        const data = await response.json() ;
        return data.rates.BDT;
       
    }

  static async USDtoBDT(amount){
       const rate = await CurrencyConvater.fatchRate();
       const bdt = amount * rate ;
       return bdt ;

    }
   static async BDTtoUSD(amount){
    const rate =  await CurrencyConvater.fatchRate() ;
     const usd = amount / rate ;
     return usd ;
   }
}

const amountInusd = 100 ;

const  bdt = await CurrencyConvater.USDtoBDT(amountInusd);
console.log(`${amountInusd} usd is equal in to ${bdt} `)
