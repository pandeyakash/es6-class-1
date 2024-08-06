// Define a class Iphone4
class Iphone4 {
  // Constructor to initialize properties
  constructor(ASIN, color, display, camera, bluetooth) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
  }

  // Method to simulate dialing a phone
  dial() {
    return `tring.. tring...`;
  }

  // Method to simulate sending a message
  sendMessage() {
    return `Sending message...`;
  }

  // Method to simulate clicking the camera
  cameraClick() {
    return "Camera clicked";
  }

  // Method to simulate connecting to Bluetooth
  connectBluetooth() {
    return `Bluetooth connected successfully...`;
  }
}

// Create an instance of Iphone4
let i4 = new Iphone4(
  1, // ASIN
  "Gray", // color
  7.8, // display size
  "2.0 MP", // camera resolution
  "5.1" // Bluetooth version
);

// Log the properties to the console
console.log(i4.ASIN); // 1
console.log(i4.color); // Gray
console.log(i4.display); // 7.8
console.log(i4.camera); // 2.0 MP
console.log(i4.bluetooth); // 5.1

// Call and log the methods to the console
console.log(i4.dial()); // "tring.. tring..."
console.log(i4.sendMessage()); // "Sending message..."
console.log(i4.cameraClick()); // "Camera clicked"
console.log(i4.connectBluetooth()); // "Bluetooth connected successfully..."
