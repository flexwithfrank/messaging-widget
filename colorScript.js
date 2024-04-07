export function initializeColorScript() {
  // add firebase scripts
  var firebaseScript1 = document.createElement("script");
  var firebaseScript2 = document.createElement("script");

  firebaseScript1.src =
    "https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js";
  firebaseScript2.src =
    "https://www.gstatic.com/firebasejs/8.6.1/firebase-firestore.js";

  document.head.appendChild(firebaseScript1);

  firebaseScript1.onload = function () {
    document.head.appendChild(firebaseScript2);
  };

  // initialize firebase
  firebaseScript2.onload = function () {
    // Your code that depends on Firebase goes here

    const form = document.getElementById("mainForm");
    const alert = document.querySelector(".alert");

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyADP3aOLSSL6qMym-McFgEa7nyLF7_a-t4",
      authDomain: "configurator-form.firebaseapp.com",
      databaseURL: "https://configurator-form-default-rtdb.firebaseio.com",
      projectId: "configurator-form",
      storageBucket: "configurator-form.appspot.com",
      messagingSenderId: "676930579404",
      appId: "1:676930579404:web:b89d600cb18bac7d5a4b69",
      measurementId: "G-09DRT2RBCD",
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Create Firestore reference
    const db = firebase.firestore();

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const firstname = document.getElementById("firstname").value;
      const lastname = document.getElementById("lastname").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const colorPicker = document.querySelector(
        'input[name="extcolor"]:checked'
      ).value;

      // Add date of submission
      const date = new Date();
      const dateSubmitted = date.toDateString();

      try {
        // Add a new document to the 'mainForm' collection
        const docRef = await db.collection("mainForm").add({
          firstname,
          lastname,
          email,
          phone,
          color: colorPicker,
          dateSubmitted,
        });

        console.log("Document written with ID: ", docRef.id);

        // Send the customer's information to the Zapier webhook
        const response = await fetch(
          "https://hook.us1.make.com/f3jkg17dk2jvc8hchryuxvfdmxodbwxm",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `firstname=${encodeURIComponent(
              firstname
            )}&lastname=${encodeURIComponent(
              lastname
            )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
              phone
            )}&color=${encodeURIComponent(
              colorPicker
            )}&dateSubmitted=${encodeURIComponent(dateSubmitted)}`,
          }
        );

        const text = await response.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          data = text;
        }
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }

      alert.style.display = "block";

      setTimeout(() => {
        alert.style.display = "none";
      }, 3000);

      form.reset();
    });

    // end
  };

  const colorContent = {
    "Great White": {
      colorH1: "Great White",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/0f21050f-3c2e-4e10-b80a-f67c09aa3027.png",
    },
    "Night Drive": {
      colorH1: "Night Drive",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/72a219ac-b127-44e4-9835-eb2b8a15f9c7.png",
    },
    "Horizon Gray": {
      colorH1: "Horizon Gray",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/5b99f6b2-dc97-44cd-ba1b-4e5b4b5b2be3.png",
    },
    "Silver Lining": {
      colorH1: "Silver Lining",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/8b87729e-2de9-4b91-905b-08a0dcbfd929.png",
    },
    "Sun Soaked": {
      colorH1: "Sun Soaked",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/dc153b2b-f3e7-413f-bd41-aa8248a95d46.png",
    },
    "Solar Orange": {
      colorH1: "Solar Orange",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/71fa73f1-5ba6-42e7-8f0b-c10253037206.png",
    },
    "Stealth Green": {
      colorH1: "Stealth Green",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/fcef4e12-18e2-4441-a50f-80b27aae2728.png",
    },
    "Sea Grass": {
      colorH1: "Sea Grass",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/2f25e77a-64e3-4efa-ab63-42ee85e1c4e4.png",
    },
    "Red Planet": {
      colorH1: "Red Planet",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/46d7819f-78ec-41b9-b8ab-97bfbeaffbff.png",
    },
    "Marine Layer": {
      colorH1: "Marine Layer",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/06e9b8ef-087e-4e0f-a829-ad1ff64335fd.png",
    },
    Mariana: {
      colorH1: "Mariana",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/8c096a7d-0700-4eef-920e-c7ac195e6a3c.png",
    },
    "Big Sur Blue": {
      colorH1: "Big Sur Blue",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/90b7211e-5527-4621-8d49-e00c1e73254d.png",
    },
    "Blue Planet": {
      colorH1: "Blue Planet",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/d62630b6-d65d-4e5a-bb1f-ccc6a4c7c3b4.png",
    },
    "Black Pearl": {
      colorH1: "Black Pearl",
      image:
        "https://image.marketing.fiskerinc.com/lib/fe2911737164047a7d1d72/m/1/2ea23f6c-321b-4e6c-87d1-3092bb01a1fe.png",
    },
  };

  let colorSelector = document.querySelectorAll('input[name="extcolor"]');

  colorSelector.forEach((item) => {
    item.addEventListener("change", function () {
      let selectedColor = this.value;

      let selectedColorText = document.getElementById("color-text");
      let sideColorRender = document.getElementById("vehicle-render");

      selectedColorText.textContent = colorContent[selectedColor].colorH1;
      sideColorRender.src = colorContent[selectedColor].image;
    });
  });

  function showCustomerInput() {
    const customerInput = document.getElementById("customer-input");
    customerInput.style.display = "block";
  }

  var showInputCta = document.getElementById("show-input-cta");
  showInputCta.addEventListener("click", showCustomerInput);

  // end
}
