import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink } from 'react-admin';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import StorageIcon from '@material-ui/icons/Storage';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    return (
        <div>
            <MenuItemLink
                to="/orders"
                primaryText="Заказы"
                leftIcon={<StorageIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to="/items"
                primaryText="Товары"
                leftIcon={<StorageIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to="/tasks"
                primaryText="Задания"
                leftIcon={<WorkOutlineIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to="/worker-types"
                primaryText="Типы работников"
                leftIcon={<PersonOutlineIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to="/item-templates"
                primaryText="Шаблоны товаров"
                leftIcon={<ListAltIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to="/task-templates"
                primaryText="Шаблоны заданий"
                leftIcon={<WorkOutlineIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to="/schedule"
                primaryText="Расписание"
                leftIcon={<DateRangeIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            {isXSmall && logout}
        </div>
    );
}

export default Menu;