import { Avatar, AvatarBadge, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const Header = () => {
    const [active, setActive] = useState(false)

    setTimeout(function(){
        setActive(true)
    }, 5000);

    return (
        <div>
            <Stack direction='row' spacing={4}>
                <Avatar size='sm'>                    
                    <AvatarBadge boxSize='1.25em' bg={active ? 'green.500' : 'tomato'} />
                </Avatar>                
            </Stack>
        </div>
    )
}
