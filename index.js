const { Telegraf } = require('telegraf');
const axios = require('axios');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx)=> {
    ctx.reply("WelCome To New Coding Bot From Ajay Sonere , this bot can help you to build searching and sorting algorithms in c++ ");
})

bot.command('howareyou', (ctx)=> {
    ctx.reply("I am Fine ");
    setTimeout(()=>{
        ctx.reply("I hope,you will be good ");
    },0);
});

bot.command('whomadethis',(ctx)=> ctx.reply("It's made by ajay sonere"));

// linear search
bot.command("linearsearch", async function(ctx){
    let response = await axios.get('https://raw.githubusercontent.com/ajaysonere/Complete-DSA-in-C-/master/Complete%20DSA%20In%20C%2B%2B/02.%20Searching%20and%20Sorting/linearsearch.cpp');
    return ctx.reply(response.data);
});

// Binary search
bot.command("binarysearch",async function(ctx){
    let response = await axios.get('https://raw.githubusercontent.com/ajaysonere/Data-Structure-Program/master/binarysearch.cpp');
    return ctx.reply(response.data);
})

// bubble sort
bot.command('bubblesort' , async function(ctx){
    let response = await axios.get('https://raw.githubusercontent.com/ajaysonere/Complete-DSA-in-C-/master/Complete%20DSA%20In%20C%2B%2B/02.%20Searching%20and%20Sorting/bubbleSort.cpp');
    return ctx.reply(response.data);
})

// selection sort
bot.command('selectionsort',async function (ctx) {
    let response = await axios.get('https://raw.githubusercontent.com/ajaysonere/Complete-DSA-in-C-/master/Complete%20DSA%20In%20C%2B%2B/02.%20Searching%20and%20Sorting/selectionSort.cpp');
    return ctx.reply(response.data);
})

// insertion sort
bot.command('insertionsort', async function (ctx) {
    let response = await axios.get('https://raw.githubusercontent.com/ajaysonere/Complete-DSA-in-C-/master/Complete%20DSA%20In%20C%2B%2B/02.%20Searching%20and%20Sorting/insertionSort.cpp');
    return ctx.reply(response.data);
})

// count sort
bot.command('countsort', async function(ctx){
    let response = await axios.get('https://raw.githubusercontent.com/ajaysonere/Complete-DSA-in-C-/master/Complete%20DSA%20In%20C%2B%2B/02.%20Searching%20and%20Sorting/countSort.cpp');
    return ctx.reply(response.data);
})

// merge sort
bot.command('mergesort', async function (ctx) {
    let response = await axios.get('https://raw.githubusercontent.com/ajaysonere/Complete-DSA-in-C-/master/Complete%20DSA%20In%20C%2B%2B/09.%20Divide%20And%20Conquer/mergeSort.cpp');
    return ctx.reply(response.data);
})

// quick sort
bot.command('quicksort', async function (ctx) {
    let response = await axios.get('https://raw.githubusercontent.com/ajaysonere/Complete-DSA-in-C-/master/Complete%20DSA%20In%20C%2B%2B/09.%20Divide%20And%20Conquer/quickSort.cpp');
    return ctx.reply(response.data);
})

// heap sort
bot.command('heapsort', async function (ctx) {
    let response = await axios.get('https://raw.githubusercontent.com/ajaysonere/Complete-DSA-in-C-/master/Complete%20DSA%20In%20C%2B%2B/18.%20Heaps%20and%20Priority%20Queue/heapsort.cpp');
    return ctx.reply(response.data);
})

bot.on('sticker', (ctx) => ctx.reply('❤️'));

bot.launch();