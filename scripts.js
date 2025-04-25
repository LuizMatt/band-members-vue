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

            }
        };
    },
    methods: {
        addMember() {
            if (!this.newMember.fname || !this.newMember.lname || !this.newMember.instrument) {
                alert('Preencha todos os campos!');
                return;
            }
            else if (this.members.some(member => member.fname === this.newMember.fname && member.lname === this.newMember.lname)) {
                alert('Membro já existe!');
                return;
            } else {

                this.members.push(this.newMember);
                this.newMember = {}
            }
        }
    }
};

Vue.createApp(handlingForms).mount('#app');