import React from "react";
import Node from "../../components/Node";


let data = {
    data: {
        type: 0,
        label: 'folder0_0',
        children: [
            {
                type: 0,
                label: 'folder0_0_0'
            },
            {
                type: 0,
                label: 'folder0_0_0'
            },
            {
                type: 0,
                label: 'folder0_0_0',
                children: [
                    {
                        type: 1,
                        label: 'picture0_0_8',
                        url: 'data:image/jpeg;base64,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'
                    },
                    {
                        type: 0,
                        label: 'folder0_0_9'
                    },
                ]
            },
            {
                type: 0,
                label: 'folder0_0_0',
                children: [
                    {
                        type: 0,
                        label: 'folder0_0_0',
                        children: [
                            {
                                type: 0,
                                label: 'folder0_0_0'
                            },
                            {
                                type: 0,
                                label: 'folder0_0_0'
                            },
                        ]
                    },
                    {
                        type: 0,
                        label: 'folder0_0_0'
                    },
                    {
                        type: 0,
                        label: 'folder0_0_0'
                    }
                ]
            },
            {
                type: 0,
                label: 'folder0_0_0'
            },
            {
                type: 0,
                label: 'folder0_0_0'
            },
            {
                type: 1,
                label: 'picture0_0_6',
                url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFhUXFRcWFxcVFxUYFxgYFxcXFxcXFRgYHSggGB0lHRcVITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMABBwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABBEAABAwIDBQUFBwIEBgMAAAABAAIRAyEEEjEFBkFRYRMicYGRMqGx0fAUQlJTweHxYpIHFSNyFjOCk7LCQ4Oi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgICAQQCAQUBAAAAAAAAAAECEQMSIRMxQVEEIqEyYXGBkRT/2gAMAwEAAhEDEQA/APEONrLimynsaOKYDSEiWU4C0xbRADAuXFKCgBITmPI0TQFyAFlPZVIuCUxIi6AVzkgK5cgBcyeHC+sR71GuCEwJGtkwE9rZ6fBNc5pHGbzpCaAqEK9sWSBWFPC9t3gWzbNqD+9lJT2S7NeAAQfEa/L1WnRk+3YnZDdksseU+qNq0ZBHMfEdEU2lAgAADgEuXX3W6+5dscdRoybt2ZyjhCXFuhHA/XVQ1WwSPFaWoAASeAn+Vm3EG/Erky41BJGkZWMaBN0QMOXE5dLKXAgF7YHPW8/I2Vw2kB08Aniw7IJSoCoYcNHXipIRBYkc3S379f08l0qNcGdkBC5ShnWEmVFARgJU/J/P14LmoASfr5pwC6E9ukef6efC37pgd5JE4iLW8oPvCRMRmVwKMxbg/vEQeOURPVw0Bv5qE4V2TOBLZiRwPUcF5ji74OiyMCVLSwziW910O0gG8cuagWr2BtJtQCm6A8CBp3gOXVaYYRnKm6FJtFDXwDg7JDjoBIiZ/dRYfBveS1okgTGhi3PxW+FJQ4tgYx9SBLWk6cgTddj+FHvZG7MPWwjmOyv7v10UJHRazYWzWOpiq8Bz3kul1+J0Re0NjNqGSSCOUEWWS+I5R2Q9zEQlAjUK523sgUDma+b2EHnqDGnjC7D1W1IFVrcvE3t/VI0100+Cx6LUtXwytikIXIvH0abXRTfnHhpfnx8UKQVlKNOh2NT+zMTFv3hNV3s/GA0y11PNEeyyZtaYEDgqxwUnTdA3RTsFwNPFGnC6lxIiLwCCTyjXyUFaSZIidLQI6DzR+Bc6oBSgGAYdcRrE84laY4puiWNwFdrB4m8X8yrxosgsHsggy8gwRAHTn7lagW0813YYSUeTOXcHyrsinyrsq2omgWtRDmlvMQoDs6mdWjSFYliXIpcE+6HyV1HBNacw104WHKynLUU6nFoTciSgl2AGLE000VkSFiKAEcySmuZ0Gn78NTdFmmk7JS0OgKPr68khCMdSUbmLOytQbKlCkKaSlsGpy5QVMYxpgm/ST8FyXUj7FqymLiPvA2jyjS6fVoupOtPO4IBHI8x06q5xm6eKY5rRTzX9pplmvE8POEmM3WxNNrSRmkxlZLsvjAsCVzdKfPDNStqbOL2mtRaSwHvN1cw+A1byPyVeCt7uXsapSz1KgIDwIbcGxNyCLcPVZvevsRWLaTMhaS18QGkjiADbjyTyYaxqfb9gDt394iIpVnHKSIeTobgZ+epvwlX+3m5cPVP9BHrb9V502mTJAJAuYGg5nkj2bbrCiaGaWERcSQOQK0xfKag4z/oTibTd2ifs1LMfuk26kkfoEcaazm7G8NJtNtGqS0tkBxu0gkkA8tY5WWh2jhm16ZLYcCDAa6Gmf6gbjpK7sOSLxrX0JxB6+Gp1BBDXWtppbT0Cy+8OB7A5qVmFuVwBE68eMGB5oLaWAq0Xd4OaeBkwY5OB5/ohquLqZC1xJDou6SYBOjjwn4LjzZ1JNSjTBRG0KL3AxYfVo4qajgC8kC8Bx5AROvJT7KxTGsdnbUvAzsggXm4tPhPAK+2ecGA4iq3vANOY5CABoNCL3WWLFGVc/koyTqPUfXHwWq2Ds7s6YcfaeJOtgdAlxtPZjeyyVH5g3vgkuYXZjBaWiYiLEqEbWBk06lNjGAhrHNLnPjjAILRwC0wRjB7Ov9CS8Ddo4GjSEuzXIhuaNNYVTW2ib5GtZPFt3EcieKhx2NfVdme6TwgGB0Qt+VvBZZM1v6cISRY4Xa9VsknMI0d8bX/lT0duvAMtDjqOAAVbg6JeconQkeICRwA0uYv9cfFJZciV2FIsMLtlweXPGYERYxlHGBxWoDZWW2BQY+tDmg90kAyb9Rpx48lsMn19ea7fiuTi22JxIMi7Kp8q7IuknUhDEmREZEuVAag+T6+vNJkRORcWJMNQY00mRE5FxasZI0igJ7EBjMQ1ntHy4ovauKFJs8TZo6/JZOo8kyTJPNcmTJXCG1RYVtqD7rT52+CErbQcRAgdRqhSmrB5JMR0rkiVQB65unt1uLp5TArMAzjmNM7ehtPI++7dQXlG5lbJjaBmAX5D1zgtg+ZC9qdQXrYMrlHk0irRUGgqvF7vYeo7O+iwu4mIn/dGvmtM6goXUVs6fcrUzOD3do0apq02lpLS0tB7pBIMwdNPBDbS3Sw1YzkLHHjThs+UR7lqnUlE6mlpBqqVBoeZ7S3Fqtk0nB4tDTZ559FSbM2pWwjyG2v3mO0JFrjgeoXsppqm2nuxh62bNTAcfvts6edtfNc0/i09sbpg8fozo3xw7mAPY+XCHNAa4CI1kjMPkqDezFYeo5jqGuUh9iLCA0QbCL6Ltubq18O+GtdUZqHsaT5OA9k+5Vztl1gWA03A1CQwEd50RNteK5suXLJOM1+DNpmy3HzHDEH2c7g3wgE+8lWNfYlBxk0WT0AHrCK3c2e6lh6bHsyuAMiZuSTPjdWBpLvxxXTSkarHwZv/AIaoTZhg6tDn5SeFpTGbDyP/ANN7qbOLGk3P/USG+QWjNFNNJPpw9B0zGY7dnv5mlxabkd3MDI0mARr+6BrYHD0yW1XVGnUDKCRrclpLT4WW+NJYzbuyajqj6vZkS4NbFyY7oJ1geAXPmxxiriiZQoCw9bCU3tgVHiCC8zAkcGxM8Edh9jYeswmk92ok8o4EEDmg8HsV7nkFrwHNcASHgZgJ9pw0MHXnCt93Ni1aTi58NERlBnNPOLWt71njTbpxVEqLO2ZsFtF+fMXGCBaNecaq2DUV2aQUl2RjGKpFaA2RdkRPZruzVWLQHDEuRT9muDE7FqD5EuRT5F2RIWoMWJr2wCTYAEk9Ai8iod7MXlpim03fr/tHzNvVZZZKKtjSMztHFmq8uOn3RyCETiE1eU3btkiBRlPKakAi5cuSEFYd5a4OGoII8QZC+itm1xXo06zRAqMa8dMwmF84hem/4b78Npilgq7YZmLadWfZzOJDXg8JMAjSRI4rqwz1Zpjfg9FfQUD6Cun0FC+gutTOhRKV1BQuoq5dQULqCrqFqJUGimmirR1BMNFHULUCsNFAbV2O2s0XLXtOanUHtMdzHMcxoVoTQTDRScr4ZXTTKs0Ex1FWZopjqSe5XTKw0VGaSsnUlG6klsHTK40kw0lYOpqM00bB0wA0k3skcaaaaaLJeMB7JJ2SNNNJkRZLxgfZJOzRnZpCxPYlwA+zXFiKyJCxPYhwBciQsRJYoq72saXOIDQCSTwATshxBMZWbTY57jDWiT8h1Xnu0cYatRzzx4chwHoi9vbadXdAtTB7refDM7r04KpXBnzbul2MJP0c5RnqpRBidJUb1zEjCkSlq6EhDEqWFyQyYJwUYTgtLEep7i/4mCm3sMc5xaB3K0Oc+33agEl3R2vPmvSNj7dwuLn7PWZUIuWiQ4DmWuAMdYXzKCrHYW1qmFrsxFIw9hkToQbOa7oRZaLI0bwy+z6YdRULqC7dzbNLHYduIpGxs5p9pjh7THdR7wQeKsHUlpudiKp1BRuoq0dSUbqKe5qirNJMdSVkaSidST2NEVzqSidTQ+2948NhszX1AajR/wAtslxMSAYENnrzCxOy9/anb/6+XsXuvAjsgYAIPEDjPUjknuDnFOmbl1NROpqxNJRuoqtjXUrXU1E6mrJ1FRuoqrFqVxpphpqwNJMNFOyXEALEhpo00knZIshxATTXFiN7Fd2KLIcQAsSGmj+xSdinZDiAGks/vrbDRMZnsb8Xf+q1pprF/wCI9YBtJnMvd6ANH/kVOWX0ZjkSUWYB6aQnBq4leccIlRsW4pkJxXAapAISmp5TYSAYuUjgOGi5ADQUoKYCnBWQOTgVGllMdmr3I3yrbOqEsAfTeR2lN1g6JALT91wnXjx6fQmydtUMTQp4hjwG1G5gHEAi8FpvqCCD4L5TaVY7N2xWoew9wB1bPdPkbBUmdGLKlxI+qSBMSJ5SmupL57w28j3AGZ+MoyhvbWaZzOFos4z4Fa6L2dSnH2e34moxntOA8SsTvpvtToMLMO5r6xkEi7aY4k83ch5nkfOtobx1qsy8gdCZPidVQYnEEpNUOeZJcHYjEFxJJJJMkkySTckniVD2oULnJizs5HM9t3A29SrYalSc8dsxpYWmZLWmGGTr3cvnK1PZgr502bj30XtqMMFpkfqPBekbL3zqOEtceodBj1Wsfsehg+QpKn3PQXUVE6gsu3e6qeDfMfujKG9U+01vlI+avWRvuXDqCYaKq6+9dNtyBHisht7e+rVd/pOdTYIgNMOJ5ki/kjlEzyxj3N++ksDjN8Xh57JrSzQZpl39WtvBUTNo1G5nNe4OcCCZMkGxnmq97km2c2T5Frg9I2VvNQqMl9RrHDVrrenNH4TatCqS1jw4jhp5jmF5LKmw2ILSCCQRoRqE1Ij/AKX5PZTTY1rn1HhrW3PhE2/hUtLaQq1XCmAaQuHTBaBYufNoJEzwlYV+OfUu5xceZOg6DQcErsb3Q0WA1vYnn04eipWnY3nTN2zGUnAkVGwBJuBA5mdAvLd69q/acQ4tM0291nhxPmZPhCH2ptDtLCzR7/FB0hF1jly7KjlyZduERvEWTGtlSOufikhc5ixIEFMayU9wXMsZSFYxzU0C09U8g6ppbeECsSLLksLkh2QpwTO0Ce14Kq0QKEqc1s6A+hUtOhIPdf0hp169E00HJCE4KQYZ/wCB39rvkpBg6n5b/wCx3yVDVi4KrBjgVYFyAZgav5VT+x3yRIwtcW7Kqf8A63/JaRlSo0i2JUqIV7kUcDWP/wANX/tv+Sadm1vyav8A23/JJuxttga5FHZtb8qp/Y75JP8ALqv5b/7SpFTBwjcDiS0gjUehHI9Exuza35b/AEUzNk19RSf6JrgqOy8GtwG1cI6iXVMwqC3Zie91a6IjnNx1tNRX2i5x7vdHLU+Z/hBM2VW/Kf6Kdmzq35TvRbqa9m7yzku34GGsTqUjnqYbNrflu9Ev+V1vyn+iLXsj7emCOem6lFu2ZW/Ld6Lhs2r+W70SteyWpegF5TQUadmVfwFcNl1T9wpWiWpeiGlVQ20MTPdGnHr0Vj/lFbg1RndysdG/H5InK1SJqXoowJMKSo2wV0zdqsDOX4/JJX2DVJAMAnQHj4DisHFi1lXYodE9ggXVy/dqt+E+iir7HqNFxAHNJwZOsl4Knkui5RrtnvGoTH4eOBnySaFTA2EEwdOP11TeqmNCEzso4+inkKYwuXJRTHNckPk0eFrt4fD91b4WsOnp+6rsNXZ/SVcYXEDkFodUWW2AeJ/YfNafAtEae5UOz6vgtLg4SZ0RkFsa3kPQpSwch6FSsaE6ykrYHLR+H3D5pnZN/CPrzRJjkmEjl7kw2IHUm/hCFr028m+iNcRyCFxDrJpD2KLaAHIKhxA8FcbTqdFQVnCf5VmU5k+GF/lH6q6w1Cef/wCPkqPBPutNgdEMqEhwwv8ASPOE84Ofugev7I2kQiTooZsmUD9lknWPD+VzdnEHUEdRP6q5IULiE0K0VNTCEcvIfuoDRPX1hWGKqoA1T0VolsEq0zzPquptPMrsRVPRNp1LcutrdbpkOQWAf5unNDunos7V3j7OoadVsixFSmRlIP4gTY+BKZtDe5jRFIOe7mRDR+p8E9kZvIiy3j223DM1Dqh9lv8A7O5NCzm6eAqYqt9srOzBh7s8XDkNA1s+vgVm8diH1XOqVCSSZk+5aXYu81KjRZTLHnKDOWIu4mQPNZKacuTHfaXPY3Lm+Cott4PtIlxAEkjg63HjbxQD996XCm/1b80O7eujUsWub4gEeoK1covixuaYG7Ddm3LOYDSfggq0dUXTxXag2DfBwd8FFVoD8XuWf8GLZWk8wFG4j8A96Lr0iBa/jZDup81AiKP6PiuSELkgL/CvA+6PRW+GraWVRhmHjCt8MwWWqRomaHZ1XSy02CNlmMAQFoMLUCGjZSLdpTpQzKiU1SlQ9icuTC5QuqlQurJ0GwQ+ogsVUWSxG+HYYyvRxB/0+46k4Q7KMoDmuDb3Mm97eCuMXtAZC5vetIDIJdx7smChInqIB2g8qjri/FN/4mo1SRLmOmIqWv8ABMqVGynwZudheD1WgwdTp8Fl6OIA4FWGHxh5eqZUZmppVkT2hWeoYlx4o0YiBcpOJuph7nqJzwqvFbSABOYWGn8LF4TebF1KpApjLBhoB8u9qefCUnwTLKkbrE1QqrH1i1pc1pcRwlrfebBYXae1atUxUqFpaTZssgg3trI6kp2O2wazOzdMEAGTAkEGe62eCnqIzeaxMTvPWqSWZWDoC53nP7IR+0ajvbl3+4mP7ZQ4wx+60+QKe7Bkf8x4pzpIJJ+Czcn5MHJs5+MPBrR4CP1Q78VOp9PqVa7N2NRqDO6tYGLmLwD+oV5g9gUCJbDuEgzdVGDYqZiqlUnQE9Sjdm7Eq1gCDA5q+2hsYDQH0VtuzFNmU81UcfPIJcgOC3IZANR5J5BGHd3D09GNJ/qutC6q2Pr9VW4qqOBW+kV4K4Rn8TRaLAAeACrahhXOKCrao1/b9Vm0Q2A1KzuaGqVHFFVTadbxa/wUJE8vJZsVgspVJUpyuU0OzR0ArPChAU3QjaFRdCQ0y8wkq2oPACz1HEokbQAGpPgnRakaIYqOK52MHNYnG4nE1HDK7s2BwNvaIHAlWv2kpJD2D9q7V7Om9zbuDHFoNgSAYB84WKG/tTNkexoP4m5oB5FpknyWjMnhZUVLd9naOe7UunrrKUovwTKT8Gf3hx78QGvc2A0nvFrWg5umvAcUDs/bFZgADiQBAaSSI5Rw04LQb11AQKbRxmyF2Vg2saS+JPNZ6/Yyd2U+Nf2jyQIzHMRfU6haWk/JTzOBJA6TYKJmEEz8kmPqMFM5jI0IB16KlGuQQHW3hEd0QeoB9IKEdt9/4yPBrf1QuG2W5/eyw03EuAt4nh5FO2hhKbGsDXh0/hF9OJOvuWbcu7DZljR3jqyCKhMfdcAJ8cqbidv16kNzm5FmSOPTvFUtPDTeSBzgn3K4wezQ8B3e14iER2Ybv2W+71Km6Xkl1Rri2TcD/b0PM3RdfadGnmGaHCRIBsfJdsukKYgQBMwqfE7DDqziScpdm9bkD3rRppcGm3AfX2ZmcHuAeT+NxHgBAKszsmmYLSaZA0YbT5i644kNHICB04BRHFE8REx58leqHwiV+CJLC6q+Wm57gDhycAIKlNag/unIY1BifRCPxYbYx8/RAM7F9QnshMgyQIda5bOscUcA5FltXZdKo0BjGBw09ptuuU/FSbOwtLCsc4E3ALrk6ch5lR/a3Aho1M3sPRD16vaNfSBaXRBgiesj1TpLldyW13H19tUahjQ8yI+CloNg2B9bfFUI3cfaHi3O6vqrODSZiZddo8YhKG7/AFE2FVKwGvd8dPih8RiAWyHlo5wL+EgyFXYnaNNk03jO4iH5RAHqSUuUvpNFBzG04OsyCCbdLqtrdIBtXENMkOBvEyNeSr8U8AQ4WM8+Skr7MNOS9wLSIyx3Z5yfq6CqVi02Omn7HVZu/IiEZWkkD3n9U01k17zqb35/RULnzw8rrOwJwQUqgpjjEj4pEgNKx11MK4CAzJ7XrexloyrPEhSMfbu6+fxVQzFMBgm/qjPtnJ3oiyg3DF4HfcJ6DT1RLcSP5VRUrO4X8TCb2h4n4osC6+1dVFUxqz+IrvBAbfrJEeqVhMd4yef8J7CsXEuz1JKPzDLEKoq1Gge1HVK3E2kEujgNCfJTdCD2ASq7HYRrmnJ3Y5aTx81z6xJm/WwAHQBRV6kNtF+olJ01yIppItJgW4+kIjD4Qk6FIxmZ0/AGFYMAaOJ5Rx9VnGIB2Dw4HAR6x4osVTBsLaDn4KtNQgTP/SABbxJ96e/FABrS2CeMz1jkLfBapjC6eJcQS5sGbCQbc5TauJvclug6Ek2NwhPtIE3MecE8p0lMdXBIl2Ucz05hFhbLBtaCZIvplEG3Mg3KfUq2vroInWNbcfkqj7W08bxEgGLDhOv7JgxMtzG456T8kbIXJa4Ks4Nh1z11+Ckq1zqNYtPsk9CqRmJdEtEXvYAXvaRx/RPp46BL4m8cbIU1QclnVxrspuAYPdYAeOsxyPxQGBAfUNVhMgkidCTM8eqGdi6l+A6AE8I9rxXDHPaJuQfDl0CnZN8jNEcY6dLchEz0M/onVsU3KQ7TjePJZ/DY8uJ70Emwdwt93lw1UWPByzmzOJvwnlABKtz44JG4+kHuzsf3SR3fvSBERqVcbJd2NJoc0WJ1IBAJOvqqTDYdxMui2kmI4nUXKuO3DhlJaTyJtbxUwXLYMOrYhzvZDS0iZL/cABCodoUnNMk8TERH7qzwroEZQ25sNFBiw0nvMceokgdYVSVoEymNQ6R7wE0VXREmNImyNrsABgiNRAv5iEE5/eIaOEG0eOqwaZQwNMxELk4k6fpK5ID/2Q=='
            },
            {
                type: 1,
                label: 'picture0_0_7',
                url: 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
            },
        ]
    }
};

const Map = () => {
    console.log('map', data)

    return (
        <div className="map-container">
            <Node data={data.data} level={0} headNode={true}/>
        </div>
    );
};

export default Map;