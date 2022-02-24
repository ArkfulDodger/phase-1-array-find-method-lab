function superbowlWin(record) {
    let item = record.find( x => x.result === 'W');
    return item ? item.year : undefined;
}