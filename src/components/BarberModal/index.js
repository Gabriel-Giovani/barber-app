import React, { useState, useEffect } from 'react';
import {
    Modal,
    ModalArea,
    ModalBody,
    CloseButton,
    ModalItem,
    BarberInfo,
    BarberAvatar,
    BarberName,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    ScheduleButton,
    ScheduleButtonText,
    DateInfo,
    DatePrevArea,
    DateNextArea,
    DateTitleArea,
    DateTitle,
    DateList,
    DateItem,
    DateItemWeekDay,
    DateItemNumber,
    HoursList,
    HourItem,
    HourItemText
} from './styles';
import { useNavigation } from '@react-navigation/native';
import ExpandIcon from '../../assets/expand.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const days = [
    'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
];

export default ({ visible, setShowModal, barber, service }) => {
    const navigation = useNavigation();

    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedHour, setSelectedHour] = useState(null);
    const [listDays, setListDays] = useState([]);
    const [listHours, setListHours] = useState([]);

    useEffect(() => {
        setInitialDate();
    }, []);

    useEffect(() => {
        if(barber.available)
            defineDateList();
    }, [barber, selectedMonth, selectedYear]);

    useEffect(() => {
        if(barber.available)
            defineHoursList();
    }, [barber, selectedDay]);

    const setInitialDate = () => {
        const currentDate = new Date();
        setSelectedYear(currentDate.getFullYear());
        setSelectedMonth(currentDate.getMonth());
        setSelectedDay(currentDate.getDate());
    };

    const mountDate = (date) => {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        return `${year}-${month}-${day}`;
    };

    const defineDateList = () => {
        let date = new Date(selectedYear, selectedMonth, selectedDay);
        const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
        let newListDays = [];

        for(let i = 1; i <= daysInMonth; i++){
            let selectedDate = mountDate(date);
            let availability = barber.available.filter(e => e.date === selectedDate);

            newListDays.push({
                status: availability.length > 0 ? true : false,
                weekDay: days[date.getDay()],
                numberDay: i
            });
        }

        setListDays(newListDays);
        setSelectedDay(1);
        setListHours([]);
        setSelectedHour(0);
    };

    const defineHoursList = () => {
        let date = new Date(selectedYear, selectedMonth, selectedDay);
        let selectedDate = mountDate(date);
        let availability = barber.available.filter(e => e.date === selectedDate);

        if(availability.length > 0)
            setListHours(availability[0].hours);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleScheduleClick = () => {

    };

    const handleLeftDateClick = () => {
        let mountDate = new Date(selectedYear, selectedMonth, 1);
        mountDate.setMonth(mountDate.getMonth() - 1);
        setSelectedYear(mountDate.getFullYear());
        setSelectedMonth(mountDate.getMonth());
        setSelectedDay(0);
    };

    const handleRightDateClick = () => {
        let mountDate = new Date(selectedYear, selectedMonth, 1);
        mountDate.setMonth(mountDate.getMonth() + 1);
        setSelectedYear(mountDate.getFullYear());
        setSelectedMonth(mountDate.getMonth());
        setSelectedDay(0);
    };

    return (
        <Modal
            transparent
            visible={visible}
            animationType='slide'
        >
            <ModalArea>
                <ModalBody>
                    <CloseButton onPress={handleCloseModal}>
                        <ExpandIcon width='40' height='40' fill='#FFF' />
                    </CloseButton>

                    <ModalItem>
                        <BarberInfo>
                            <BarberAvatar source={barber.avatar} />
                            <BarberName>{barber.name}</BarberName>
                        </BarberInfo>
                    </ModalItem>

                    <ModalItem>
                        <ServiceInfo>
                            <ServiceName>{ service.name }</ServiceName>
                            <ServicePrice>R$ { service.price }</ServicePrice>
                        </ServiceInfo>
                    </ModalItem>

                    <ModalItem>
                        <DateInfo>
                            <DatePrevArea onPress={handleLeftDateClick}>
                                <NavPrevIcon width='35' height='35' fill='#DB945D' />
                            </DatePrevArea>
                            <DateTitleArea>
                                <DateTitle>{`${months[selectedMonth]} ${selectedYear}`}</DateTitle>
                            </DateTitleArea>
                            <DateNextArea onPress={handleRightDateClick}>
                                <NavNextIcon width='35' height='35' fill='#DB945D' />
                            </DateNextArea>
                        </DateInfo>

                        <DateList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                listDays.map((day, index) => (
                                    <DateItem
                                        key={index}
                                        onPress={() => day.status ? setSelectedDay(day.numberDay) : null}
                                        style={{
                                            opacity: day.status ? 1 : 0.5,
                                            backgroundColor: day.numberDay === selectedDay ? '#331A1A' : '#FFF',
                                        }}
                                    >
                                        <DateItemWeekDay
                                            style={{
                                                color: day.numberDay === selectedDay ? '#FFF' : '#000'
                                            }}
                                        >
                                            { day.weekDay }
                                        </DateItemWeekDay>
                                        <DateItemNumber
                                            style={{
                                                color: day.numberDay === selectedDay ? '#FFF' : '#000'
                                            }}
                                        >
                                            { day.numberDay }
                                        </DateItemNumber>
                                    </DateItem>
                                ))
                            }
                        </DateList>
                    </ModalItem>

                    {
                        listHours.length > 0 &&
                            <ModalItem>
                                <HoursList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {
                                        listHours.map((hour, index) => (
                                            <HourItem
                                                key={index}
                                                onPress={() => {}}
                                                style={{}}
                                            >
                                                <HourItemText>{ hour }</HourItemText>
                                            </HourItem>
                                        ))
                                    }
                                </HoursList>
                            </ModalItem>
                    }

                    <ScheduleButton onPress={handleScheduleClick}>
                        <ScheduleButtonText>Finalizar Agendamento</ScheduleButtonText>
                    </ScheduleButton>
                </ModalBody>
            </ModalArea>
        </Modal>
    );
}