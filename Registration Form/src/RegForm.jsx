import React, { useState } from "react";
import logo from "./assets/gits.png";
import qrCodeImage from "./assets/qr.jpg";
import './index.css'

const RegForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [division, setDivision] = useState("A");
  const [rollNo, setRollNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [transID, setTranID] = useState("");
  const [showQrCode, setShowQrCode] = useState(false); // State to manage QR code display

  const toggleQrCode = () => {
    setShowQrCode(!showQrCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    if (email === "") {
      alert("Please enter your email address.");
      return;
    }

    if (year === "") {
      alert("Please enter your year.");
      return;
    }

    if (division === "") {
      alert("Please select your division.");
      return;
    }

    if (rollNo === "") {
      alert("Please enter your roll number.");
      return;
    }

    if (mobileNo === "") {
      alert("Please enter your mobile number.");
      return;
    }

    // Submit form
    alert("Your form has been submitted successfully!");
  };

  return (
    <div>
      <div className="mb-5 relative">
        <img src={logo} alt="Gits logo" className="py-1 h-40 w-50 mx-auto" />
        <p className="text-white text-center mt-2 text-3xl font-bold">
          GITS Event Registration
        </p>
      </div>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white text-xl font-semibold">
              Name:
            </label>
            <input
              className="w-96 bg-white mb-3 text-1xl pl-2 py-2"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email" className="text-white text-xl font-semibold">
              Email:
            </label>
            <input
              className="w-96 bg-white mb-3 text-1xl pl-2 py-2"
              id="email"
              placeholder="Enter Email ID"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="year" className="text-white text-xl font-semibold">
              Year:
            </label>
            <select
              className="w-96 bg-white mb-3 text-1xl pl-2 py-2"
              id="year"
              placeholder="Enter Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="FE" className="bg-white">
                FE
              </option>
              <option value="SE" className="bg-white">
                SE
              </option>
              <option value="TE" className="bg-white">
                TE
              </option>
              <option value="BE" className="bg-white">
                BE
              </option>
            </select>

            <div className="mb-2">
              <label
                htmlFor="division"
                className="text-white text-xl font-semibold"
              >
                Division:
              </label>
              <br />
              <input
                type="radio"
                name="division"
                value="A"
                checked={division === "A"}
                onChange={setDivision}
              />
              <label className="text-white text-2xl">A </label>
              <input
                type="radio"
                name="division"
                value="B"
                checked={division === "B"}
                onChange={setDivision}
              />
              <label className="text-white text-2xl">B</label>
            </div>

            <label htmlFor="roll" className="text-white text-xl font-semibold">
              Roll No:
            </label>
            <input
              className="w-96 bg-white mb-3 text-1xl pl-2 py-2"
              id="roll"
              type="number"
              placeholder="Enter Roll No"
              min="1"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />

            <label htmlFor="phone" className="text-white text-xl font-semibold">
              Mobile No:
            </label>
            <input
              className="w-96 bg-white mb-3 text-1xl pl-2 py-2"
              id="phone"
              placeholder="Enter Mobile No"
              type="number"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />

            <div>
              <label className="text-white text-xl font-semibold mr-2">
                Payment QR Code:
              </label>
              <button
                className="w-25 mx-auto mt-2 mb-1 bg-blue-700 hover:bg-blue-800 text-white py-1 px-2 rounded"
                type="button"
                onClick={toggleQrCode} // Toggle QR code visibility
              >
                Click here!
              </button>
            </div>
            {/* QR Code Card */}
            {showQrCode && (
              <div className="fixed top-1/4 right-auto w-3/12 h-96 flex justify-center items-center bg-transparent">
                <div className="bg-white p-2 rounded-lg border-solid border-4 border-black">
                  <img
                    src={qrCodeImage}
                    alt="QR Code"
                    className="mx-auto max-w-full h-auto bg-stone-200"
                  />

                  {/* Close QR code card */}
                  <button
                    className="block mx-auto mt-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    onClick={toggleQrCode}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <label
              htmlFor="tranID"
              className="text-white text-xl font-semibold"
            >
              Transaction ID:
            </label>
            <input
              className="w-96 bg-white mb-3 text-1xl pl-2 py-2"
              id="tranID"
              type="text"
              required
              placeholder="Enter Transaction ID"
              value={transID}
              onChange={(e) => setTranID(e.target.value)}
            />

            <button
              className="w-80 mx-auto mt-2 mb-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegForm;
