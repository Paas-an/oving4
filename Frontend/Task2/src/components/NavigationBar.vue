<template>
    <div class="navigation-bar">
        <router-link to="/FeedbackForm">Feedback Form</router-link>
        <router-link to="/">Calculator</router-link>
    </div>
</template>

<script>
export default {
    name: "NavigationBar",
};
</script>

<style scoped>
.navigation-bar {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #f0f0f0;
}

.navigation-bar a {
    margin: 0 10px;
    color: #333;
    text-decoration: none;
}

.navigation-bar a:hover {
    color: #666;
}
</style>
