function EventsSearch(props) {
  return (
    <form action="">
      <div>
        <div>
          <label htmlFor="year">year</label>
          <select name="" id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select name="" id="month"></select>
        </div>
      </div>
    </form>
  );
}

export default EventsSearch;
