// import "./index.css";
// Import the styles
import { styles } from "./colorStyles.js";
import { initializeColorScript } from "./colorScript.js";

// Initialize the color script

class ColorSelectorWidget {
  constructor(htmlContent) {
    this.htmlContent = htmlContent;
    this.initialize();
  }

  initialize() {
    // Create a div element for the widget
    const widgetContainer = document.createElement("div");
    widgetContainer.classList.add("color-selector-widget");
    widgetContainer.classList.add(
      "widget",
      "flex",
      "items-center",
      "justify-center",
      "w-full",
      "h-full",
      "bg-gray-50"
    );
    widgetContainer.innerHTML = this.htmlContent;

    // Create a div for the loader and add it to the widget
    const loaderDiv = document.createElement("div");
    loaderDiv.innerHTML = loader;
    loaderDiv.classList.add("loader", "bg-gray-50");
    widgetContainer.appendChild(loaderDiv);

    // Show loader for 3 seconds then hide
    setTimeout(() => {
      loaderDiv.classList.add("fadeOut");
    }, 1000);

    // Append the widget to the document body
    document.body.appendChild(widgetContainer);

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./output.css";
    document.head.appendChild(link);

    // Inject styles into the head of the document
    this.injectStyles(styles);

    // Add event listeners or any other initialization logic here
    console.log("Color selector widget initialized.");
  }

  injectStyles(styles) {
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
  }
}

// Example HTML content for the color selector widget
const colorSelectorHTML = `

<section class="bg-gray-50 w-full mx-auto px-6 lg:px-24 pt-12 min-h-screen absolute z-30 top-0 right-0 left-0">
<!-- paint section -->
<div class="flex flex-col items-center justify-between mx-auto">
    <div class="pt-6 w-full lg:w-9/12">
        <img id="vehicle-render" class="object-cover object-center w-full h-full"
            src="https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/0f21050f-3c2e-4e10-b80a-f67c09aa3027.png"
            alt="Fisker Ocean">
    </div>

    <div class="w-full">
        <div class="flex flex-col items-center md:flex-row justify-between gap-4 lg:-mt-8">
            <div class="container">
                <p id="color-h1-label"
                    class="mt-1 sm:mt-1 text-xl font-bold text-black fisker-bold transition duration-300 text-center">
                    Color
                </p>
            </div>
        </div>
    </div>
    <div class="w-full mx-auto flex">
        <ul class="flex flex-wrap gap-4 list-none relative overflow-hidden mx-auto py-6 px-8">
            <li>
                <input type="radio" id="greatwhite" name="extcolor" value="Great White" class="hidden peer"
                    checked>
                <label for="greatwhite"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                    dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                    relative block overflow-hidden rounded-full bg-[https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/7622b6fe-2571-444c-94f9-b98ab8367a5a.png)] bg-cover bg-center-left bg-no-repeat shadow-xl">
                </label>
            </li>
            <li>
                <input type="radio" id="nightdrive" name="extcolor" value="Night Drive" class="hidden peer">
                <label for="nightdrive"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                        dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                        relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/3fa031a9-2718-4186-a44e-aaf86c04d62c.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <input type="radio" id="horizongray" name="extcolor" value="Horizon Gray"
                    class="hidden peer">
                <label for="horizongray"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                        dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                        relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/b62c6fc5-80a9-4d0d-8399-6f57529eca61.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <input type="radio" id="silverlining" name="extcolor" value="Silver Lining"
                    class="hidden peer">
                <label for="silverlining"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                        dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                        relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/a57d20c0-b744-4b89-ad3e-f307891a2733.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <input type="radio" id="mariana" name="extcolor" value="Mariana" class="hidden peer">
                <label for="mariana"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                    dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                    relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/5c16c2b7-f86d-46ac-b45b-b3d120c96f86.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <input type="radio" id="bigsur" name="extcolor" value="Big Sur Blue" class="hidden peer">
                <label for="bigsur"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                    dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                    relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/6a1433c9-4026-4e10-a835-9158f2c4ee89.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <input type="radio" id="blueplanet" name="extcolor" value="Blue Planet" class="hidden peer">
                <label for="blueplanet"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                    dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                    relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/b01addb8-ee63-40ea-81c7-52ad1ff38f8a.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <input type="radio" id="stealthgreen" name="extcolor" value="Stealth Green"
                    class="hidden peer">
                <label for="stealthgreen"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                    dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                    relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/230ce5ff-ec75-4d5b-8cb6-a65619eb2d5e.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <input type="radio" id="redplanet" name="extcolor" value="Red Planet" class="hidden peer">
                <label for="redplanet"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                    dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                    relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/b0d88ad3-e07d-478a-9c8f-81e1f423be44.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <input type="radio" id="blackpearl" name="extcolor" value="Black Pearl" class="hidden peer">
                <label for="blackpearl"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                    dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                    relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/4b281a39-5ff6-4363-a5a8-4e4c2b6da6fb.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <input type="radio" id="seagrass" name="extcolor" value="Sea Grass" class="hidden peer">
                <label for="seagrass"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                    dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                    relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/9d9d6a6b-5e83-4e03-875b-c285a84c2c0f.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <input type="radio" id="sunsoaked" name="extcolor" value="Sun Soaked" class="hidden peer">
                <label for="sunsoaked"
                    class="inline-block hover:transition hover:duration-150 hover:ease-in-out hover:ring-black hover:ring bg-transparent hover:ring hover:ring-offset-neutral-800 justify-between items-center p-5 rounded-full cursor-pointer
                                    dark:peer-checked:text-black peer-checked:transition-all peer-checked:transition peer-checked:ring peer-checked:ring peer-checked:ring-black peer-checked:ring-offset peer-checked:ring-offset-transparent 
                                    relative block overflow-hidden rounded-full bg-[url(https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/d725a711-e982-48d5-b205-e53fb8a6ee6c.png)] bg-cover bg-center-left bg-no-repeat shadow-lg">
                </label>
            </li>
            <li>
                <button type="button" id="show-input-cta" aria-label="Show Customer Input"
                    class="text-black border-2 border-black focus:ring-0 focus:outline-none font-medium rounded-full text-sm p-2 text-center inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span class="sr-only">Icon description</span>
                </button>
            </li>

        </ul>
    </div>
    <h4 id="color-text" class="text-sm sm:text-md font-semibold text-[#979696] fisker-bolder">
        Great White
    </h4>

</div>

<form id="mainForm">
<div id="customer-input">
    <div class="grid md:grid-cols-1 gap-6 w-full max-w-xl mx-auto pt-8">
        <div>
            <p class="mt-1 sm:mt-1 text-3xl sm:text-3xl font-bold text-black fisker-bold">
                Enter Your Details</p>
            </p>
        </div>
        <div class="relative z-0">
            <input type="text" id="firstname" name="firstname"
                class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer fisker-bold"
                placeholder=" " />
            <label for="firstname" id="firstname"
                class="absolute text-md text-[#7A7979] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First
                Name
            </label>

        </div>
        <div class="relative z-0">
            <input type="text" id="lastname" name="lastname" required
                class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer fisker-bold"
                placeholder=" " />
            <label for="lastname" id="lastname"
                class="absolute text-md text-[#7A7979] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Last
                Name
            </label>

        </div>

        <div class="relative z-0">
            <input type="email" id="email" name="email"
                class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer fisker-bold"
                placeholder=" " />
            <label for="email" id="email-label" required
                class="absolute text-md text-[#7A7979] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email
            </label>

        </div>
        <div class="grid grid-cols-12 w-full gap-4">

            <div class="relative z-0 col-span-12 w-full">
                <input type="phone" id="phone" name="phone" maxlength="14" required
                    class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer fisker-bold"
                    placeholder=" " />
                <label for="phone" id="phone-label"
                    class="absolute text-md text-[#7A7979] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone
                </label>

            </div>
        </div>
        <div id="mkgt_optin_1" class="flex items-start">
            <input required id="mkgt_optin_1" type="checkbox" name="mkgt_optin_1" value="True"
                class="w-6 h-6 text-black bg-gray-100  rounded border-black focus:ring-2 focus:ring-white cursor-pointer border"
                checked="">
            <div class="ml-2 text-sm">
                <p id="disclaimer-label-1" class="text-xs font-normal text-black fisker-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit.
                    Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. </p>
            </div>
        </div>
        <div class="py-3">
            <button type="submit" value="submit" id="submit"
                class="text-white bg-[#211F1F] lg:hover:bg-transparent lg:hover:text-[#211F1F] border-2 border-[#211F1F] focus:ring-0 focus:outline-none focus:ring-[#FC4C02] font-medium rounded-full text-sm px-6 py-2.5 text-center fisker-bold">
                Submit
            </button>

            <div class="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 alert"
                role="alert">
                <span class="font-medium">Form Submitted!</span>
            </div>

        </div>
    </div>
</div>
</form>
</section>

`;

const loader = `

<div class="h-full flex items-center justify-center">
  <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
    <div class="flex justify-center items-center gap-4">
      <div class="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-gray-200 rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</div>

`;

// Initialize the color selector widget
const colorSelectorWidget = new ColorSelectorWidget(colorSelectorHTML);

initializeColorScript();
