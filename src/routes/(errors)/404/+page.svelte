<script>
  import HeadComponent from '$lib/HeadComponent.svelte';
  import '$lib/newspaper.css';
</script>

<HeadComponent
  data={{
    title: '404 - Not Found',
    description: 'The page you are looking for does not exist. It may have been moved or deleted.'
  }}
/>

<div class="container">
  <div class="inner">
    <img src="/generic-server-error.png" alt="404 Not Found" class="error-image" />
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist. It may have been moved or deleted.</p>
  </div>
</div>

<style>
  .container .inner {
    text-align: center;
  }
  .container .inner p {
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
</style>
