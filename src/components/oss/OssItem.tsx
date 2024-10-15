import React from 'react';
import { Styled } from '../../styles/oss';

interface OssItemProps {
  label: string;
  link: string;
  subLink?: string;
  descriptions: string[];
}

const OssItem = ({ label, link, subLink, descriptions }: OssItemProps) => {
  return (
    <Styled.ListItem>
      <p>
        <strong>{label}</strong>
      </p>
      <Styled.Link href={link} target="_blank">
        {link}
      </Styled.Link>
      {descriptions.map((description, index) => (
        <p key={label}>
          {description}{' '}
          {index === 0 && subLink && (
            <Styled.Link href={subLink} target="_blank">
              {subLink}
            </Styled.Link>
          )}
        </p>
      ))}
    </Styled.ListItem>
  );
};

export default OssItem;
