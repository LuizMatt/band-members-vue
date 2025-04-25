const members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
];

const handlingForms = {
    data() {
        return {
            members: members,
            newMember: {
                fname: '',
                lname: '',
                instrument: ''
            }
        };
    },
    methods: {
        addMember() {
            this.members.push(this.newMember );
        }
    }
};

Vue.createApp(handlingForms).mount('#app');