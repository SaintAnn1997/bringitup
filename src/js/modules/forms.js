export default class Form {
    constructor(formSelector, url) {
        this.formSelector = document.querySelectorAll(formSelector);
        this.url = url;
    }

    async postData(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    }

    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[type="email"]');

        mailInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if(e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }

    //Маска ввода номера и инпуты!!!

    bindPostData(formSelector, url) {

        formSelector.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(formSelector);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            this.postData(url, json)
                .then(data => {
                    console.log(data);
                }).catch(() => {
                    console.log('error');
                }).finally(() => {
                    formSelector.reset();
                });
        });
    }

    init() {
        this.checkMailInputs();

        this.formSelector.forEach(item => {
            this.bindPostData(item, this.url);
        });
    }
}