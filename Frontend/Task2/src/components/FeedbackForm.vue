<template>
    <div>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="message">Message:</label>
                <textarea id="message" v-model="message" required></textarea>
            </div>
            <button type="submit" :disabled="!isFormValid">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    computed: {
        isFormValid() {
            return this.name && this.email && this.message;
        }
    },
    methods: {
        ...mapActions(['storeEmail', 'storeName']),
        async submitForm() {
            if (this.isFormValid) {
                this.storeEmail(this.email);
                this.storeName(this.name);

                const response = await fetch('http://localhost:3000/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: this.name, email: this.email, message: this.message })
                });

                if (response.ok) {
                    console.log('Success!');
                    
                    
                    
                } else {
                    // Handle error
                }
            }
        }
    }
}
</script>

