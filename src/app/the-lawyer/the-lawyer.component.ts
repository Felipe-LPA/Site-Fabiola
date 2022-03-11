import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-lawyer',
  templateUrl: './the-lawyer.component.html',
  styleUrls: ['./the-lawyer.component.scss'],
})
export class TheLawyerComponent implements OnInit {
  constructor() {}

  bodyText: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet commodo magna. Cras id libero vel neque consectetur semper. Nam imperdiet lacus sit amet libero congue, sit amet accumsan nibh imperdiet. Etiam eu aliquam erat, laoreet ultricies est. Proin pretium vel lectus ac finibus. Aliquam eu pretium lorem, vitae lacinia dolor. Praesent viverra pharetra eleifend. Maecenas massa tellus, varius et tempus vel, consectetur eu nibh. ',
    'Etiam faucibus, mauris id aliquet pellentesque, purus leo dignissim magna, in imperdiet erat purus vel justo. Integer iaculis sed sem nec tincidunt. Curabitur efficitur, urna quis mollis rutrum, magna ante lacinia nisi, vel ultricies lectus magna ac nisl. Vestibulum dictum, orci finibus tempus elementum, magna est finibus nisi, at mattis dui nulla iaculis justo. Duis vel mi nulla. Mauris pharetra egestas ex sit amet suscipit. Morbi semper, tortor quis vestibulum tincidunt, leo risus pharetra quam, non interdum sapien risus sit amet odio. Pellentesque rhoncus nibh ut nunc dignissim cursus. Aenean luctus nisl sit amet dui pulvinar hendrerit. Nullam tristique neque eget orci facilisis, vitae iaculis est laoreet. Morbi eget libero sollicitudin, rhoncus lectus in, tempor felis. Nam vestibulum purus mi, sed semper ligula scelerisque id. Suspendisse sagittis, urna a tincidunt fringilla, ante ante dapibus lorem, eget congue augue metus eu tortor. Donec quam risus, eleifend eu maximus eget, varius vitae mi. Aliquam auctor vehicula viverra. Vivamus vehicula dolor risus, vel gravida velit auctor quis.'
  ];

  ngOnInit(): void {}
}
