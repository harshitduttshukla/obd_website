
async function testApis() {
    try {
        const makeListUrl = 'http://13.202.193.4:3000/api/fetch_make_list?segement=["car","bike","hcv"]';
        console.log(`Fetching from: ${makeListUrl}`);
        const res1 = await fetch(makeListUrl);
        const data1 = await res1.json();
        console.log('--- Make List Full Output (Sample) ---');
        if (Array.isArray(data1)) {
            console.log(JSON.stringify(data1.slice(0, 5), null, 2));
        } else {
            console.log('Keys:', Object.keys(data1));
            console.log(JSON.stringify(data1, null, 2).substring(0, 500));
        }

        const coverageUrl = 'http://13.202.193.4:3000/api/fetch_coverage?make=Mahindra';
        console.log(`\nFetching from: ${coverageUrl}`);
        const res2 = await fetch(coverageUrl);
        const data2 = await res2.json();
        console.log('--- Coverage Sample Mahindra ---');
        if (data2.data) {
            console.log(JSON.stringify(data2.data.slice(0, 5), null, 2));
        } else if (Array.isArray(data2)) {
            console.log(JSON.stringify(data2.slice(0, 5), null, 2));
        } else {
            console.log('Keys:', Object.keys(data2));
            console.log(JSON.stringify(data2, null, 2).substring(0, 500));
        }
    } catch (e) {
        console.error(e);
    }
}

testApis();
