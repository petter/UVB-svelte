<script lang="ts">
    let className = '';
    export { className as class };
</script>

<style>
    div {
        border: 16px solid #ffffff; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

<div class="{className} mx-auto" />
