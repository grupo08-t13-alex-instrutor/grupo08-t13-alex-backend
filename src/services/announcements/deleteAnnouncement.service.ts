const deleteAnnouncementService =async ( announcementId: string ): Promise<object> => {
    const announcementRespository = x;
    
    const findAnnouncement = await announcementRespository.findOneBy({ id: announcementId });
    if( !findAnnouncement ){
        console.log( 'User not exists', 400 );
    };

    await announcementRespository.delete({ id: announcementId });
    
    return {};
};

export { deleteAnnouncementService };
