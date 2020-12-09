import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ebad: true,
      bad: true,
      netural: true,
      good: true,
      egood: true,

      competencyebad: true,
      competencybad: true,
      competencynetural: true,
      competencygood: true,
      competencyegood: true,

      trustebad: true,
      trustbad: true,
      trustnetural: true,
      trustgood: true,
      trustegood: true,

      customerebad: true,
      customerbad: true,
      customernetural: true,
      customergood: true,
      customeregood: true,

      Responsiveness: '',
      Competency: '',
      Trustworthness: '',
      Customer: '',
    };

    this.handleClickEbad = this.handleClickEbad.bind(this);
    this.handleClickBad = this.handleClickBad.bind(this);
    this.handleClickNetural = this.handleClickNetural.bind(this);
    this.handleClickGood = this.handleClickGood.bind(this);
    this.handleClickEgood = this.handleClickEgood.bind(this);

    this.handleClickCompetencyEbad = this.handleClickCompetencyEbad.bind(this);
    this.handleClickCompetencyBad = this.handleClickCompetencyBad.bind(this);
    this.handleClickCompetencyNetural = this.handleClickCompetencyNetural.bind(
      this
    );
    this.handleClickCompetencyGood = this.handleClickCompetencyGood.bind(this);
    this.handleClickCompetencyEgood = this.handleClickCompetencyEgood.bind(
      this
    );

    this.handleClickTrustEbad = this.handleClickTrustEbad.bind(this);
    this.handleClickTrustBad = this.handleClickTrustBad.bind(this);
    this.handleClickTrustNetural = this.handleClickTrustNetural.bind(this);
    this.handleClickTrustGood = this.handleClickTrustGood.bind(this);
    this.handleClickTrustEGood = this.handleClickTrustEGood.bind(this);

    this.handleClickCustomerEbad = this.handleClickCustomerEbad.bind(this);
    this.handleClickCustomerBad = this.handleClickCustomerBad.bind(this);
    this.handleClickCustomerNetural = this.handleClickCustomerNetural.bind(
      this
    );
    this.handleClickCustomerGood = this.handleClickCustomerGood.bind(this);
    this.handleClickCustomerEGood = this.handleClickCustomerEGood.bind(this);
  }

  handleClickEbad() {
    this.setState({ ebad: !this.state.ebad, Responsiveness: 'Extremly Bad' });
  }
  handleClickBad() {
    this.setState({ bad: !this.state.bad, Responsiveness: 'Bad' });
  }
  handleClickNetural() {
    this.setState({ netural: !this.state.netural, Responsiveness: 'Neutral' });
  }
  handleClickGood() {
    this.setState({ good: !this.state.good, Responsiveness: 'Good' });
  }
  handleClickEgood() {
    this.setState({
      egood: !this.state.egood,
      Responsiveness: 'Extremly Good',
    });
  }

  handleClickCompetencyEbad() {
    this.setState({
      competencyebad: !this.state.competencyebad,
      Competency: 'Extremly Bad',
    });
  }
  handleClickCompetencyBad() {
    this.setState({
      competencybad: !this.state.competencybad,
      Competency: 'Bad',
    });
  }
  handleClickCompetencyNetural() {
    this.setState({
      competencynetural: !this.state.competencynetural,
      Competency: 'Neutral',
    });
  }
  handleClickCompetencyGood() {
    this.setState({
      competencygood: !this.state.competencygood,
      Competency: 'Good',
    });
  }
  handleClickCompetencyEgood() {
    this.setState({
      competencyegood: !this.state.competencyegood,
      Competency: 'Extremly Good',
    });
  }

  handleClickTrustEbad() {
    this.setState({
      trustebad: !this.state.trustebad,
      Trustworthness: 'Extremly Bad',
    });
  }
  handleClickTrustBad() {
    this.setState({ trustbad: !this.state.trustbad, Trustworthness: 'Bad' });
  }
  handleClickTrustNetural() {
    this.setState({
      trustnetural: !this.state.trustnetural,
      Trustworthness: 'Netural',
    });
  }
  handleClickTrustGood() {
    this.setState({ trustgood: !this.state.trustgood, Trustworthness: 'Good' });
  }
  handleClickTrustEGood() {
    this.setState({
      trustegood: !this.state.trustegood,
      Trustworthness: 'Extremly Good',
    });
  }

  handleClickCustomerEbad() {
    this.setState({
      customerebad: !this.state.customerebad,
      Customer: 'Extremly Bad',
    });
  }
  handleClickCustomerBad() {
    this.setState({ customerbad: !this.state.customerbad, Customer: 'Bad' });
  }
  handleClickCustomerNetural() {
    this.setState({
      customernetural: !this.state.customernetural,
      Customer: 'Netural',
    });
  }
  handleClickCustomerGood() {
    this.setState({ customergood: !this.state.customergood, Customer: 'Good' });
  }
  handleClickCustomerEGood() {
    this.setState({
      customeregood: !this.state.customeregood,
      Customer: 'Extremly Good',
    });
  }

  render() {
    const handleSubmit = () => {
      console.log(this.state.Responsiveness);
      console.log(this.state.Competency);
      console.log(this.state.Trustworthness);
      console.log(this.state.Customer);
    };

    return (
      <div className='container'>
        <h1 className='heading'>BajajCapital</h1>
        <p style={{ marginLeft: 10, fontWeight: 600, fontSize: 20 }}>
          Please rate your satisfaction on the following attributes of our
          service.
        </p>
        <br></br>

        <h1
          style={{
            display: 'inline',
            marginLeft: 200,
            fontWeight: 200,
            fontSize: 20,
          }}
        >
          Responsiveness
        </h1>
        <br></br>
        <br></br>
        <div>
          <p
            style={{
              display: 'inline',
              marginLeft: 25,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Extremely bad
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 45,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Bad
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 80,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Netural
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 70,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Good
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 50,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Extremely Good
          </p>
          <div
            className={this.state.ebad ? 'responseEbadDefault' : 'responseEbad'}
            onClick={this.handleClickEbad}
          ></div>
          <div
            className={this.state.bad ? 'responseBadDefault' : 'responseBad'}
            onClick={this.handleClickBad}
          ></div>
          <div
            className={
              this.state.netural ? 'responseNeturalDefault' : 'responseNetural'
            }
            onClick={this.handleClickNetural}
          ></div>
          <div
            className={this.state.good ? 'responseGoodDefault' : 'responseGood'}
            onClick={this.handleClickGood}
          ></div>
          <div
            className={
              this.state.egood ? 'responseEgoodDefault' : 'responseEgood'
            }
            onClick={this.handleClickEgood}
          ></div>
        </div>

        <br></br>
        <br></br>
        <h1
          style={{
            display: 'inline',
            marginLeft: 100,
            fontWeight: 200,
            fontSize: 20,
          }}
        >
          Competency in advising right solutions
        </h1>
        <br></br>
        <br></br>
        <div>
          <p
            style={{
              display: 'inline',
              marginLeft: 25,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Extremely bad
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 45,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Bad
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 80,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Netural
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 70,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Good
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 50,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Extremely Good
          </p>
          <div
            className={
              this.state.competencyebad
                ? 'competencyEbadDefault'
                : 'competencyEbad'
            }
            onClick={this.handleClickCompetencyEbad}
          ></div>
          <div
            className={
              this.state.competencybad
                ? 'competencyBadDefault'
                : 'competencyBad'
            }
            onClick={this.handleClickCompetencyBad}
          ></div>
          <div
            className={
              this.state.competencynetural
                ? 'competencyNeturalDefault'
                : 'competencyNetural'
            }
            onClick={this.handleClickCompetencyNetural}
          ></div>
          <div
            className={
              this.state.competencygood
                ? 'competencyGoodDefualt'
                : 'competencyGood'
            }
            onClick={this.handleClickCompetencyGood}
          ></div>
          <div
            className={
              this.state.competencyegood
                ? 'competencyEgoodDefault'
                : 'competencyEgood'
            }
            onClick={this.handleClickCompetencyEgood}
          ></div>
        </div>

        <br></br>
        <br></br>
        <h1
          style={{
            display: 'inline',
            marginLeft: 200,
            fontWeight: 200,
            fontSize: 20,
          }}
        >
          Trustworthness
        </h1>
        <br></br>
        <br></br>
        <div>
          <p
            style={{
              display: 'inline',
              marginLeft: 25,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Extremely bad
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 45,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Bad
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 80,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Netural
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 70,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Good
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 50,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Extremely Good
          </p>
          <div
            className={
              this.state.trustebad
                ? 'TrustworthnessEbadDefault'
                : 'TrustworthnessEbad'
            }
            onClick={this.handleClickTrustEbad}
          ></div>
          <div
            className={
              this.state.trustbad
                ? 'TrustworthnessBadDefault'
                : 'TrustworthnessBad'
            }
            onClick={this.handleClickTrustBad}
          ></div>
          <div
            className={
              this.state.trustnetural
                ? 'TrustworthnessNeturalDefault'
                : 'TrustworthnessNetural'
            }
            onClick={this.handleClickTrustNetural}
          ></div>
          <div
            className={
              this.state.trustgood
                ? 'TrustworthnessGoodDefault'
                : 'TrustworthnessGood'
            }
            onClick={this.handleClickTrustGood}
          ></div>
          <div
            className={
              this.state.trustegood
                ? 'TrustworthnessEgoodDefault'
                : 'TrustworthnessEgood'
            }
            onClick={this.handleClickTrustEGood}
          ></div>
        </div>

        <br></br>
        <br></br>
        <h1
          style={{
            display: 'inline',
            marginLeft: 150,
            fontWeight: 200,
            fontSize: 20,
          }}
        >
          Customer service and support
        </h1>
        <br></br>
        <br></br>
        <div>
          <p
            style={{
              display: 'inline',
              marginLeft: 25,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Extremely bad
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 45,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Bad
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 80,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Netural
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 70,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Good
          </p>
          <p
            style={{
              display: 'inline',
              marginLeft: 50,
              fontSize: 12,
              fontWeight: 100,
            }}
          >
            Extremely Good
          </p>
          <div
            className={
              this.state.customerebad ? 'CustomerEbadDefault' : 'CustomerEbad'
            }
            onClick={this.handleClickCustomerEbad}
          ></div>
          <div
            className={
              this.state.customerbad ? 'CustomerBadDefault' : 'CustomerBad'
            }
            onClick={this.handleClickCustomerBad}
          ></div>
          <div
            className={
              this.state.customernetural
                ? 'CustomerNeturalDefault'
                : 'CustomerNetural'
            }
            onClick={this.handleClickCustomerNetural}
          ></div>
          <div
            className={
              this.state.customergood ? 'CustomerGoodDefault' : 'CustomerGood'
            }
            onClick={this.handleClickCustomerGood}
          ></div>
          <div
            className={
              this.state.customeregood
                ? 'CustomerEgoodDefault'
                : 'CustomerEgood'
            }
            onClick={this.handleClickCustomerEGood}
          ></div>
        </div>
        <button className='submit' type='submit' onClick={() => handleSubmit()}>
          Next
        </button>
      </div>
    );
  }
}

export default Form;
