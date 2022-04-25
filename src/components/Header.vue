<template>
    <header class="header">
        <img class="logo" src="../images/logo.png" alt="logo">
        <label class="admin_toggle">
            <input :checked="this.$store.state.admin"
                   type="checkbox"
                   @change="this.$store.commit('setAdmin')"
            >
            <span class="toggler">
                Admin toggle
            </span>
        </label>
        <nav class="navbar">
            <ul>
                <header-button @click="this.$router.push('/')">Home</header-button>
                <header-button @click="this.$router.push('/add')">Add Post</header-button>
                <header-button @click="this.$router.push('/about')">About</header-button>
            </ul>
        </nav>
    </header>
</template>

<script>
    import HeaderButton from "@/components/UI/HeaderButton";

    export default {
        components: {HeaderButton},
        data() {
            return {
                check: false
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .header {
        position: fixed;
        z-index: 2;
        width: 100%;
        height: 60px;
        padding: 0 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #4A8FE7;
        box-shadow: 0 0 10px black;
        color: #ffffff;
    }

    .logo {
        width: 50px;
        height: 50px;
    }

    .navbar {
        min-width: 230px;

        & ul {
            list-style: none;
            display: flex;
            justify-content: space-around;
        }
    }

    .admin_toggle {
        position: relative;
        width: 100px;
        height: 15px;
        cursor: pointer;

        & input {
            display: none;
        }

        & input:checked + .toggler:after {
            background: green;
            right: -37px;
        }
    }

    .toggler {
        &:before {
            content: '';
            position: absolute;
            width: 40px;
            height: 20px;
            right: -40px;
            background: black;
            border-radius: 20px;
        }

        &:after {
            content: '';
            height: 16px;
            width: 16px;
            position: absolute;
            right: -19px;
            top: 2px;
            background: red;
            border-radius: 50%;
            transition: all .5s ease;
        }
    }
</style>