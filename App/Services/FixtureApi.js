export default {
  // Functions return fixtures

  // entity fixtures
  // ignite-jhipster-api-fixture-needle

  // auth fixtures
  setAuthToken: () => {

  },
  removeAuthToken: () => {

  },
  login: (authObj) => {
    if (authObj.username === 'user' && authObj.password === 'user') {
      return {
        ok: true,
        data: require('../Fixtures/login.json')
      }
    } else {
      return {
        ok: false,
        status: 400,
        data: 'Invalid credentials'
      }
    }
  },
  register: ({user}) => {
    if (user === 'user') {
      return {
        ok: true
      }
    } else {
      return {
        ok: false,
        data: 'Invalid email'
      }
    }
  },
  forgotPassword: ({email}) => {
    if (email === 'valid@gmail.com') {
      return {
        ok: true
      }
    } else {
      return {
        ok: false,
        data: 'Invalid email'
      }
    }
  },
  getAccount: () => {
    return {
      ok: true,
      status: 200,
      data: require('../Fixtures/getAccount.json')
    }
  },
  updateAccount: () => {
    return {
      ok: true
    }
  },
  changePassword: ({password}) => {
    if (password === 'valid-password') {
      return {
        ok: true
      }
    } else {
      return {
        ok: false,
        data: 'Password error'
      }
    }
  },
  getBaner: () => {
    return {
      'banners': [
        {
          'pic': 'http://p3.music.126.net/s25q2x5QyqsAzilCurD-2w==/7973658325212564.jpg',
          'adLocation': null,
          'titleColor': 'red',
          'adid': null,
          'typeTitle': '新碟首发',
          'encodeId': '3165446',
          'targetType': 10,
          'url': '',
          'monitorClick': null,
          'monitorImpress': null,
          'monitorType': null,
          'monitorBlackList': null,
          'adSource': null,
          'extMonitor': null,
          'extMonitorInfo': null,
          'targetId': 3165446,
          'exclusive': false
        },
        {
          'pic': 'http://p4.music.126.net/V9-MXz6b2MNhEKjutoDWIg==/7937374441542745.jpg',
          'adLocation': null,
          'titleColor': 'blue',
          'adid': null,
          'typeTitle': '专栏',
          'encodeId': '170001',
          'targetType': 1005,
          'url': 'http://music.163.com/m/topic/170001',
          'monitorClick': null,
          'monitorImpress': null,
          'monitorType': null,
          'monitorBlackList': null,
          'adSource': null,
          'extMonitor': null,
          'extMonitorInfo': null,
          'targetId': 170001,
          'exclusive': false
        },
        {
          'pic': 'http://p4.music.126.net/CTU5B9R9y3XyYBZXJUXzTg==/2897213141428023.jpg',
          'adLocation': null,
          'titleColor': 'blue',
          'adid': null,
          'typeTitle': '专栏',
          'encodeId': '169001',
          'targetType': 1005,
          'url': 'http://music.163.com/m/topic/169001',
          'monitorClick': null,
          'monitorImpress': null,
          'monitorType': null,
          'monitorBlackList': null,
          'adSource': null,
          'extMonitor': null,
          'extMonitorInfo': null,
          'targetId': 169001,
          'exclusive': false
        },
        {
          'pic': 'http://p4.music.126.net/tGPljf-IMOCyPvumoWLOTg==/7987951976374270.jpg',
          'adLocation': null,
          'titleColor': 'red',
          'adid': null,
          'typeTitle': '歌单',
          'encodeId': '81662699',
          'targetType': 1000,
          'url': '',
          'monitorClick': null,
          'monitorImpress': null,
          'monitorType': null,
          'monitorBlackList': null,
          'adSource': null,
          'extMonitor': null,
          'extMonitorInfo': null,
          'targetId': 81662699,
          'exclusive': false
        },
        {
          'pic': 'http://p4.music.126.net/mp2Y2n4ueZzIj6JSnUOdtw==/7875801790676538.jpg',
          'adLocation': null,
          'titleColor': 'blue',
          'adid': null,
          'typeTitle': '广告',
          'encodeId': '0',
          'targetType': 3000,
          'url': 'http://wlj2015.qq.com/',
          'monitorClick': null,
          'monitorImpress': null,
          'monitorType': null,
          'monitorBlackList': null,
          'adSource': null,
          'extMonitor': null,
          'extMonitorInfo': null,
          'targetId': 0,
          'exclusive': false
        },
        {
          'pic': 'http://p3.music.126.net/e0gGadEhjur2UuUpDF9hPg==/7788940372125389.jpg',
          'adLocation': null,
          'titleColor': 'red',
          'adid': null,
          'typeTitle': '新碟首发',
          'encodeId': '3165337',
          'targetType': 10,
          'url': '',
          'monitorClick': null,
          'monitorImpress': null,
          'monitorType': null,
          'monitorBlackList': null,
          'adSource': null,
          'extMonitor': null,
          'extMonitorInfo': null,
          'targetId': 3165337,
          'exclusive': false
        }
      ],
      'code': 200
    }
  }
}
