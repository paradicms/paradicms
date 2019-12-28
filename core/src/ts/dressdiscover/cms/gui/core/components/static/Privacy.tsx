import {Frame} from 'dressdiscover/cms/gui/core/components/frame/Frame';
import {ActiveNavbarItem} from 'dressdiscover/cms/gui/core/components/navbar/ActiveNavbarItem';
import {Hrefs} from 'dressdiscover/cms/gui/core/Hrefs';
import * as React from 'react';

export class Privacy extends React.Component {
    render() {
        return (
            <Frame activeNavItem={ActiveNavbarItem.Home} documentTitle="Privacy">
                <p>
                    This privacy notice discloses the privacy practices for the DressDiscover
                    web site (https://dressdiscover.org). This privacy notice
                    applies
                    solely to information collected by this website.
                </p>

                <h4>Information Collection, Use, and Sharing</h4>
                <p>We are the sole owners of the information collected on this site. We only have access to/collect
                    information
                    that you voluntarily give us via email or other direct contact from you. We will not sell or rent
                    this information to anyone.</p>

                <p>We will use your information to respond to you, regarding the reason you contacted us. We will not
                    share
                    your information with any third party outside of our organization, other than as necessary to
                    fulfill
                    your request.</p>

                <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new
                    products or services, or changes to this privacy policy.</p>

                <h4>Your Access to and Control Over Information</h4>
                                        <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting
                        us via the email address given on our website:</p>
                                        <ul>
                                            <li>See what data we have about you, if any.</li>
                                            <li>Change/correct any data we have about you.</li>
                                            <li>Have us delete any data we have about you.</li>
                                            <li>Express any concern you have about our use of your data.</li>
                                        </ul>

                                        <h4>Security</h4>
                                        <p>We take precautions to protect your information. When you submit sensitive information via the website,
                            your information is protected both online and offline.</p>

                                        <p>Wherever we collect sensitive information such as your account password, that information is encrypted
                                            and transmitted to us in a secure way. You can verify this by looking for a lock icon in the
                            address bar and looking for "https" at the beginning of the address of the Web page.</p>

                                        <p>While we use encryption to protect sensitive information transmitted online, we also protect your
                                            information offline. Only employees who need the information to perform a specific job (for example,
                                            billing or customer service) are granted access to personally identifiable information. The computers/servers
                            in which we store personally identifiable information are kept in a secure environment.</p>

                                        <h4>Cookies</h4>
                                        <p>We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's hard drive
                                            to help us improve your access to our site and identify repeat visitors to our site. For instance,
                                            when we use a cookie to identify you, you would not have to log in a password more than once,
                                            thereby saving time while on our site. Cookies can also enable us to track and target the interests
                                            of our users to enhance the experience on our site. Usage of a cookie is in no way linked to
                            any personally identifiable information on our site.</p>

                                        <h4>Links</h4>
                                        <p>This website contains links to other sites. Please be aware that we are not responsible for the content
                                            or privacy practices of such other sites. We encourage our users to be aware when they leave
                                            our site and to read the privacy statements of any other site that collects personally identifiable
                                            information.
                        </p>

                                        <p>If you feel that we are not abiding by this privacy policy, you should&nbsp;
                            <a href={Hrefs.contact}>contact us immediately</a>.</p>
            </Frame>
        );
    }
}
