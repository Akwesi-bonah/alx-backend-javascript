const getPaymentTokenFromAPI = (sucess) => new Promise ((reslove , _reject) =>
{
if (sucess){
    reslove({data: 'Successful response from the API' })
}
});

module.exports = getPaymentTokenFromAPI;

