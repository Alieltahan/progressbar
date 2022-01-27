import {Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'SourceComponent/ContentWrapper';
import Steps from './Checkout.steps';

class Checkout extends SourceCheckout{

    checkOutSteps() {
        let steps = [];
        console.log(this.stepMap)

        for (let key in this.stepMap)
        steps.push(this.stepMap[key].title.value)
        return steps;
    } 
    
    
    render() {
        const {checkoutStep, location} = this.props;
        // console.log('Props', this.props);
        // console.log(this.stepMap[checkoutStep])
        // checkoutStep // location
        // console.log(this.checkOutSteps().length)
    return (
        <main block="Checkout">
            <Steps steps={this.checkOutSteps()}  />
            
            <ContentWrapper
              wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
              label={ __('Checkout page') }
            >
                { this.renderSummary(true) }
                <div block="Checkout" elem="Step">
                    { this.renderTitle() }
                    { this.renderGuestForm() }
                    { this.renderStep() }
                    { this.renderLoader() }
                </div>
                <div>
                    { this.renderSummary() }
                    { this.renderPromo() }
                    { this.renderCoupon() }
                </div>
            </ContentWrapper>
        </main>
    );
}

}

export default  Checkout;