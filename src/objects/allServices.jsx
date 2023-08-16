import { faArrowRightArrowLeft, faPaperPlane, faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const allServices = [
    
    {

    title: 'Shipping',
    icon: <FontAwesomeIcon className='fontawesome-service-icon' icon={faPaperPlane} bounce/>,
    text: 'We make shippings to all over the country, shipping prices can be seen prior to purchase',


},{

    title: 'Gather up Points',
    icon: <FontAwesomeIcon  className='fontawesome-service-icon' icon={faArrowRightArrowLeft} bounce />,
    text: 'Each purchase gathers up points which then can be use for special deals'

},{

    title: 'Discounts',
    icon: <FontAwesomeIcon className='fontawesome-service-icon'  icon={faPercent} bounce />,
    text: 'Access to a 10% discount if you had already purchased 3 or more products'

}]
