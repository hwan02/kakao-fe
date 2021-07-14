let Complete = {
  render: () => {
    let view = `
            <section class="section">
                <h1> 완료화면 </h1>
                  <button
                    type='button'
                    id='submit'
                    class='w-full text-center py-3 rounded bg-black text-white my-1 hover:bg-gray-600 focus:outline-none'
                  ><a class='border-b-2' id='buttonA'>
                      시작
                    </a></button>
            </section>
        `
    return view
  },
}

export default Complete
