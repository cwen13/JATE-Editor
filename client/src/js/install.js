const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
  window.prompt(event);
  
  // Remove the hidden class from the button.
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;
  
  if (!promptEvent) {
    return;
  }
  
  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
}); 


/*

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  
  
  
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  event.preventDefault();
  //added from the Mini project
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);

  
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  event.preventDefault();
  //added from the mini project
  // Clear prompt
  window.deferredPrompt = null;

});
*/

