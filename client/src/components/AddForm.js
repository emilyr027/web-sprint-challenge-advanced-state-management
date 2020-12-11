import React, {useState} from "react"
import { connect } from "react-redux"
import { addSmurfs } from "../actions/index"

const AddForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        position: "",
        nickname: ""
    })

    const handleChanges = (e) => {
        setNewSmurf({ ...newSmurf, [e.target.name] : [e.target.value]})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setNewSmurf("");
        props.addSmurfs(newSmurf);
    }

    return (
        <section>
            <h2>Add Smurf</h2>
            <form>
            <div className="form-group">
                <input name="name" type="text" placeholder="Smurf's Name" onChange={handleChanges}></input>
                <input name="position" type="text" placeholder="Smurf's Position" onChange={handleChanges}></input>
                <input name="nickname" type="text" placeholder="Smurf's Nickname" onChange={handleChanges}></input>
            </div>
                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button type="submit" onClick={onSubmit}>Submit Smurf</button>
            </form>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {addSmurfs})(AddForm)




//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.