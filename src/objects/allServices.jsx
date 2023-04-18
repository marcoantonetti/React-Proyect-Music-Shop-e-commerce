import { faArrowRightArrowLeft, faPaperPlane, faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const allServices = [
    
    {

    title: 'Shipping',
    icon: <FontAwesomeIcon className='fontawesome-service-icon' icon={faPaperPlane} bounce style={{color: "#dd910e"}}/>,
    text: 'We make shippings to all over the country, shipping price can be seen prior to purchase',


},{

    title: 'Gather up Points',
    icon: <FontAwesomeIcon className='fontawesome-service-icon' icon={faArrowRightArrowLeft} bounce style={{color: "#dd910e"}} />,
    text: 'Each purchase gathers up points which can be use for special deals'

},{

    title: 'Discounts',
    icon: <FontAwesomeIcon className='fontawesome-service-icon' bounce icon={faPercent} />,
    text: 'Access to 10% discount if you had already purchased 3 or more products'

}]
