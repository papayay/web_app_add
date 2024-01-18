
import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, IconButton, Box, Button } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const UserCard = ({ user }) => {
    const [isTeacherInterested, setIsTeacherInterested] = useState(false); // 添加这行代码
    const avatarSrc = user.avatar || '/default-avatar.jpg'; // 使用默认头像

    // 处理按钮点击的逻辑
    const handleButtonClick = () => {
        setIsTeacherInterested(prevState => !prevState); // 切换老师的兴趣状态
    };

    return (
        <Card sx={{ display: 'flex', m: 2, borderRadius: 3, boxShadow: 3, maxWidth: 345 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                <Avatar
                    alt={user.name}
                    src={avatarSrc} 
                    sx={{ width: 50, height: 50, mb: 1 }}
                />
                <Typography variant="h6" component="div">
                    {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    年齡: {user.age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    電話: {user.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Email: {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    性别: {user.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    薪資範圍: {user.salaryrange && user.salaryrange.includes('-') ? (
                        <>
                            {user.salaryrange.split('-')[0]} - {user.salaryrange.split('-')[1]}
                        </>
                    ) : (
                        user.salaryrange
                    )}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    專長: {user.expertise}
                </Typography>
            </Box>
            <CardContent sx={{ flex: '1' }}>
                {/* ... */}
                
                {/* 显示消息文本和按钮 */}
                {isTeacherInterested && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        你有人要
                    </Typography>
                )}
                <Button variant="contained" color="primary" onClick={handleButtonClick}>
                    {isTeacherInterested ? '老師反悔了' : '老師要你'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default UserCard;
