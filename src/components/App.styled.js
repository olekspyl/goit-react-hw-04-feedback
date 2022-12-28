import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 4px;
            width: 200px;
            height: 50px;
            border-color: transparent;
            font-weight: 700;
            font-size: 16px;
            line-height: 1.88px;
            
            letter-spacing: 0.06em;
            justify-content: center;
            cursor: pointer;
            transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
                        color 250ms cubic-bezier(0.4, 0, 0.2, 1),
                        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0px;
            &:hover, &:focus {
                    color: blue;
                    box-shadow:
                        0px 3px 1px rgba(0, 0, 0, 0.1),
                        0px 1px 2px rgba(0, 0, 0, 0.08),
                        0px 2px 2px rgba(0, 0, 0, 0.12);
                }

`
export const FeedbackList = styled.ul`
list-style: none;
display: flex;
justify-content: center; 
`

export const FeedbackItem = styled.li`
margin: 10px;
`

export const SectionStyle = styled.section`
display: flex;
justify-content: center; 
font-size: 24px;
font-weight: bold;
`

export const NotificationStyle = styled.p`
color: blue;
font-weight: bold;
display: flex;
justify-content: center; 
`
export const Container = styled.div`
text-align: center;
`

export const StatisticsItem = styled.p`
margin-left: 20px;
font-weight: bold;

`

