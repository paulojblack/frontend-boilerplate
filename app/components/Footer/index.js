/**
*
* Footer
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <a href="https://github.com/paulojblack">Paulo Black</a>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
