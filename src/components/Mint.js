import React from 'react';
import {useState} from 'react';
const { create } = require('ipfs-http-client');
const ipfs = create(new URL("https://ipfs.infura.io:5001"));
const Mint = () => {
  const [state, setState] = useState({
    id: "",
    description: "",

  })

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  async function submit() {
    const cid = await ipfs.add(JSON.stringify(state));

    console.log("IPFS cid:", cid);

    console.log(await ipfs.cat(cid));
    console.log(await ipfs.get(cid));
  }
  return (
    <div className="container contact-form">
    <div className="contact-image">
      <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
    </div>

    <h3> Minte deinen NFT</h3>
    <div className="row">
      <div className="col-md-11">
        <div className="form-group">
          <input type="text" name="id" className="form-control" id="id" placeholder="NFT Name" value={state.id} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="text" name="description" className="form-control" id="description" placeholder="Beschreibung" value={state.description} onChange={handleChange} />
        </div>
        {/*
                    <div className="form-group">
                        <input type="text" name="image" className="form-control" id="image" placeholder="IPFS hash"  />
                    </div>
                    <div className="form-group">
                        <input type="text" name="address" className="form-control" id="address" placeholder="Wallet Addresse"  />
                    </div> */}
        <div className="form-group">
          <button type="submit" name="btnSubmit" className="btnContact" value="Mint NFT" onClick={submit}> Submit </button>
        </div>
      </div>

    </div>

  </div>
  );
}

export default Mint;