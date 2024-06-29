const ism = document.getElementById('ism');
const familiya = document.getElementById('fam');
const yosh = document.getElementById('yosh');
const button = document.getElementById('button');
const blockes = document.querySelector('.blockes');
const wrapper = document.getElementById('wrapper')
const local = document.getElementById('local')

function create() {
    return `
    <div class="blockes">
      <div class="mall">
        <p>Ism : ${ism.value}</p>
        <p>Familiya : ${familiya.value}</p>
        <p>Yosh : ${yosh.value}</p>
      </div>
    </div>
   `
}

function savestorage() {
     const todolar = {
        ism:  ism.value,
        familiya:  familiya.value,
        yosh: yosh.value,
        status: 'active',
        id: Date.now()
     };

     let data = [];
     if(localStorage.getItem('todos')) {
        data = JSON.parse(localStorage.getItem('todos'))
     };

     data.push(todolar);
     localStorage.setItem('todos', JSON.stringify(data))
}

button.addEventListener('click', function(event) {
    event.preventDefault();
    const ismValue = ism.value;
     if (ismValue.length < 1) {
        alert('isimni kiritish zarur');
        ism.focus();
        ism.style.outlineColor = 'red';
        return;
     };
    const item = create();
    wrapper.innerHTML += item;
    savestorage(ism.value);
    ism.value = '';

})
button.addEventListener('click', function(event) {
    event.preventDefault();
    const famValue = familiya.value;
    if(famValue.length < 1) {
        alert('familiyani kiritish zarur');
        familiya.focus();
        familiya.style.outlineColor = 'red';
        return;
    };
    savestorage(familiya.value)
    familiya.value = '';

})
button.addEventListener('click', function(event) {
    event.preventDefault();
    const yoshValue = yosh.value;
    if (yoshValue < 1) {
        alert('yoshingizni kiritish zarur');
        yosh.focus();
        yosh.style.outlineColor = 'red';
        return;
    };
    savestorage(yosh.value)
    yosh.value = '';

})
