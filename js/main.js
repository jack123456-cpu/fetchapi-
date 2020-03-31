// fetch和json的认识
// 用户操作http的请求相应 fetch原生的js 不是ajax的封装
// fetch 是内置在浏览器中
// get请求 

// 获取汇率 实现dom节点更新

function calculate(){
const currency_one = currencyOne.value;
const currency_two = currencyTwo.value;
// console.log(currency_one,currency_two)
fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(res=>res.json()).then(data=>{
	const rate = data.rates[currency_two];
	// console.log(rate);
	rateEl.innerHTML = `1${currency_one} = ${rate}${currency_two}`;
	amountTwo.value = (rate * amountOne.value).toFixed(2);
})
}



// 获取节点
const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');

const amountOne =document.querySelector('#amount-one');
const amountTwo =document.querySelector('#amount-two');

const swap =document.querySelector('#swap');
const rateEl =document.querySelector('#rate');

// 事件监听
currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
amountOne.addEventListener('change',calculate);
amountTwo.addEventListener('input',calculate);
// 交换 
swap.addEventListener('click',()=>{
	let temp = null;
	temp = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = temp;
	calculate();
});
calculate();