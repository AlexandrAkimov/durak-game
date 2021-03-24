<style>
  .snackbar {
    position: fixed;
    top: 10px;
    left: calc(50% - 150px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    min-height: 40px;
    border: 1px solid #008960;
    z-index: 999;
    border-radius: 6px;
    background-color: #dbf1d8;
  }
  
  .snackbar.wide {
    min-width: 790px;
  }

  .info {
    border: 1px solid #1565D8;
    color: #034693;;
    box-sizing: border-box;
    box-shadow: 10px 10px 20px rgba(168, 168, 168, 0.25);
    background-color: #F6F8FD;;
  }
  .success {
    background-color: #dbf1d8;
    border-color: #008960;
    color: #108461;
  }
  .warn {
    background-color: #fff3cd;
    border-color: #c5a32f;
    color: #b48e10;
  }
  .error {
    background-color: #ffdbda;
    color: #cf514f;
    border-color: #cc3835;
  }
</style>

<script>
  import { fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';


  export let type;
  export let withTitle = true;
  export let title;
  export let tooltipText = '';
  export let iconOnTop = false;
  export let wide = false;
  export let closable = true;
  let icon = ''
  let color = ''
  const dispatch = createEventDispatcher();
  $: {
    switch (type) {
      case 'info':
        icon = 'info-outline';
        title = 'Success';
        color = '#1683AE';
        break;
      case 'warn':
        icon = 'error-outline';
        title = 'Warning';
        color = '#C5A32F';
        break;
      case 'success':
        icon = 'check_circle';
        title = 'Success';
        color = '#108461';
        break;
      case 'error':
        icon = 'block-outline';
        title = 'Error';
        color = '#D24C49';
        break;
    }
    if (tooltipText) {
      title = tooltipText;
    }
  }
</script>

<div
  class="snackbar mx-12 items-center justify-between"
  class:info="{type === 'info'}"
  class:warn="{type === 'warn'}"
  class:error="{type === 'error'}"
  class:success="{type === 'success'}"
  class:wide
  class:pr-12="{closable}"
  transition:fly|local="{{ duration: 250 }}"
>
  <div class="flex-1 flex items-center p-14">
    <div class="ml-12 w-full">
        <slot />
    </div>
  </div>
</div>
