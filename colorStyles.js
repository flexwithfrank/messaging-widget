export const styles = `

.loader {
  position: fixed;
  visibility: visible;
  opacity: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 1);
  z-index: 9999;
  display: flex; 
  justify-content: center;
  align-items: center;
  transition: visibility 0.6s, opacity 0.6s linear;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.loader.fadeOut {
  visibility: hidden;
  opacity: 0;
  animation: fadeOut 0.6s ease-in-out forwards;
}

#customer-input {
  animation: modalFadeIn 0.6s ease-in-out forwards;
  display: none;
}

/* Custom animation for modal */
@keyframes modalFadeIn {
  from {
      opacity: 0;
      transform: translateY(30px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
}

#popup-modal {
  opacity: 0;
  visibility: hidden;
  transform: translateY(50px);
  transition: opacity 0.3s, transform 0.3s;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

#popup-modal.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

#popup-modal.fade-in {
  transition-delay: 0.1s;
  /* Add a slight delay for fade-in effect */
}

#popup-modal.swipe-up {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  /* Customize the timing function for the swipe-up effect */
}

html {
  scroll-behavior: smooth;
}

#sticky-banner {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  /* rest of your CSS properties */
}

#phone-error,
#phone-error-2,
#countrycode-error {
  display: none;
}

.alert{
  display: none;  
}
`;
